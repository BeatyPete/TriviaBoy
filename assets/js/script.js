var timeLeft = 60;
var i = 0;

var startbtnEl = document.querySelector("#startbtn");
var timerEl = document.querySelector("#timer");
var goodEl = document.querySelector("#good");
var answerbtnEl = document.querySelector(".answerbtn");



//array to save scores
var scores = [];

//question array
var questions = [
    {
        "question": "Commonly used data types DO NOT include:",
        //R = text for button responses
        "R1": "1. strings",
        "R2": "2. booleans",
        "R3": "3. alerts",
        "R4": "4. numbers",
        //A = answer for button responses
        "A1": "false",
        "A2": "false",
        "A3": "true",
        "A4": "false",
    },
    {
        "question": "The condition in an if / else statement is enclosed with _____.",
        "R1": "1. quotes",
        "R2": "2. curly brackets",
        "R3": "3. parenthesis",
        "R4": "4. square brackets",
        "A1": "false",
        "A2": "false",
        "A3": "true",
        "A4": "false",
    },
    {
        "question": "Arrays in JavaScript can be used to store ______.",
        "R1": "1. numbers and strings",
        "R2": "2. other arrays",
        "R3": "3. booleans",
        "R4": "4. all of the above",
        "A1": "false",
        "A2": "false",
        "A3": "false",
        "A4": "true",
    },
    {
        "question": "String values must be enclosed within _____ when being assigned to variables.",
        "R1": "1. commas",
        "R2": "2. curly brackets",
        "R3": "3. quotes",
        "R4": "4. parenthesis",
        "A1": "false",
        "A2": "false",
        "A3": "true",
        "A4": "false",
    },
    {
        "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "R1": "1. JavaScript",
        "R2": "2. terminal/bash",
        "R3": "3. for loops",
        "R4": "4. console.log",
        "A1": "false",
        "A2": "false",
        "A3": "false",
        "A4": "true",
    }
];

//timer
var timerStart = function() {
    var countdown = setInterval(() => {
        document.getElementById("timer").innerHTML="Time: " + timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countdown);
            clear();
        }
    }, 1000);
    clear();
};

//clear main div
var clear = function() {
    var main = document.querySelector("#main");
    if (i < questions.length && timeLeft > 0) {
        main.remove();

        display();
    }
    else {
        main.remove();
        endGameCreate();
    }
};

//add question
var display = function() {
    //create div with h1 inside
    var questionWrapper = document.createElement("div");
    questionWrapper.className = "question-container";
    questionWrapper.id = "main";
    questionWrapper.innerHTML = "<h1>" + questions[i].question + "</h1>"
    goodEl.appendChild(questionWrapper);
    //create ul
    var answerList = document.createElement("ul");
    questionWrapper.appendChild(answerList);
    //create li's
    var R1 = document.createElement("li");
    R1.innerHTML = "<button class='btnstyling answerbtn' id='" + questions[i].A1 + "'>" + questions[i].R1 + "</button>"
    answerList.appendChild(R1);
    var R2 = document.createElement("li");
    R2.innerHTML = "<button class='btnstyling answerbtn' id='" + questions[i].A2 + "'>" + questions[i].R2 + "</button>"
    answerList.appendChild(R2);
    var R3 = document.createElement("li");
    R3.innerHTML = "<button class='btnstyling answerbtn' id='" + questions[i].A3 + "'>" + questions[i].R3 + "</button>"
    answerList.appendChild(R3);
    var R4 = document.createElement("li");
    R4.innerHTML = "<button class='btnstyling answerbtn' id='" + questions[i].A4 + "'>" + questions[i].R4 + "</button>"
    answerList.appendChild(R4);
    i++;
};



//click matches up to id given to each answer
var answer = function(event) {
    var targetEl = event.target;
    if (targetEl.matches("#true")) {
        clear();
        var tb = document.querySelector("#tb-container");
        tb.remove();
        //display trivia boy happy
        var imgWrapper = document.createElement("div");
        imgWrapper.id = "tb-container";
        document.body.appendChild(imgWrapper);
        var correctimg = document.createElement("img");
        correctimg.src = "./assets/images/triviaboyhappy.png"
        imgWrapper.appendChild(correctimg);

    }
    else if (targetEl.matches("#false")) {
        timeLeft = timeLeft - 10;
        clear();
        var tb = document.querySelector("#tb-container");
        tb.remove();
        //display trivia boy sad
        var imgWrapper = document.createElement("div");
        imgWrapper.id = "tb-container";
        document.body.appendChild(imgWrapper);
        var correctimg = document.createElement("img");
        correctimg.src = "./assets/images/triviaboysad.png"
        imgWrapper.appendChild(correctimg);
    }
};

var endGameCreate = function() {
    timerEl.remove();
    var questionWrapper = document.createElement("div");
    questionWrapper.className = "question-container";
    questionWrapper.id = "main";
    questionWrapper.innerHTML = "<h1>All done!</h1><p>Your final score is " + timeLeft + "</p>"
    goodEl.appendChild(questionWrapper);
    submitWrapper = document.createElement("div");
    submitWrapper.className = "submit-wrapper";
    submitWrapper.innerHTML = "<p>Enter initials:</p><input type='text'/><button class='btnstyling submitbtn' id='submitbtn'>Submit</button>";
    questionWrapper.appendChild(submitWrapper);
};

var endGameSubmit = function(event) {
    var finalScore = timeLeft + 1;
    var targetEl = event.target;
    if (targetEl.matches("#submitbtn")) {
        var initialsInput = document.querySelector("input").value;
        var score = {
            "name": initialsInput,
            "score": finalScore,
        };
        scores.push(score);
        localStorage.setItem("scores", JSON.stringify(scores));
        window.location.href = "./scores.html";
    }
};

var loadScores = function() {
    if (window.localStorage.length < 1) {
        console.log("good job");
        return;
    }
    else {
        var savedScores = localStorage.getItem("scores");
    savedScores = JSON.parse(savedScores);
    scores = savedScores;
    }
};
 
startbtnEl.addEventListener("click", timerStart);
goodEl.addEventListener("click", answer);
goodEl.addEventListener("click", endGameSubmit);

loadScores();
