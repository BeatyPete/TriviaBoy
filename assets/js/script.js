var timeLeft = 10;
var i = 0;

var startbtnEl = document.querySelector("#startbtn");
var timerEl = document.querySelector("#timer");
var goodEl = document.querySelector("#good");
var answerbtnEl = document.querySelector(".answerbtn");

//question array
var questions = [
    {
        "question": "Question 1",
        //R = text for button responses
        "R1": "1",
        "R2": "2",
        "R3": "3",
        "R4": "4",
        //A = answer for button responses
        "A1": "false",
        "A2": "true",
        "A3": "false",
        "A4": "false",
    },
    {
        "question": "Question 2",
        "R1": "5",
        "R2": "6",
        "R3": "7",
        "R4": "8",
        "A1": false,
        "A2": true,
        "A3": false,
        "A4": false,
    },
    {
        "question": "Question 3",
        "R1": "9",
        "R2": "10",
        "R3": "11",
        "R4": "12",
        "A1": false,
        "A2": true,
        "A3": false,
        "A4": false,
    },
    {
        "question": "Question 4",
        "R1": "13",
        "R2": "14",
        "R3": "15",
        "R4": "16",
        "A1": false,
        "A2": true,
        "A3": false,
        "A4": false,
    },
    {
        "question": "Question 5",
        "R1": "17",
        "R2": "18",
        "R3": "19",
        "R4": "20",
        "A1": false,
        "A2": true,
        "A3": false,
        "A4": false,
    }
]

//timer
var timerStart = function() {
    var countdown = setInterval(() => {
        document.getElementById("timer").innerHTML="Time: " + timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countdown);
            //add call to endscreen function here
        }
    }, 1000);
    clear();
};

//clear main div
var clear = function() {
    var main = document.querySelector("#main");
    main.remove();
    display();
};

//add question
var display = function() {
    //create div with h1 inside
    var questionWrapper = document.createElement("div");
    questionWrapper.className = "question-container";
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



//selecting correct answer adds p and moves on to next question
var correct = function(event) {
    var targetEl = event.target;
    if (targetEl.matches("#true")) {
        console.log("true");
    }
    else if (targetEl.matches("#false")) {
        console.log("false");
    }

};

var worng = function() {

};


startbtnEl.addEventListener("click", timerStart);
goodEl.addEventListener("click", correct);
