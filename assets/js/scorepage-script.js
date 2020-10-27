//variables for scorepage
var clearbtnEl = document.querySelector("#clear");
var containerEl = document.querySelector(".score-wrapper");

var scores = [];

var insertScores = function() {
    var num = 1;
    for (var i = 0; i < scores.length; i++) {
        var scoreDisplay = document.createElement("div");
        scoreDisplay.className = "score-container";
        scoreDisplay.innerHTML = num + ". " + scores[i].name + " - " + scores[i].score;
        containerEl.appendChild(scoreDisplay);
        num = num + 1;
    };
};

var clearScores = function() {
    localStorage.clear();
    containerEl.remove();
};

var loadScores = function() {
    var savedScores = localStorage.getItem("scores");
    savedScores = JSON.parse(savedScores);
    scores = savedScores;
};

clearbtnEl.addEventListener("click", clearScores);

loadScores();
insertScores();