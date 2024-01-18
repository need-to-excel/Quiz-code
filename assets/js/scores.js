var scoreCount = document.querySelector("#highscores");
var clear = document.querySelector("#clear");

function getUsers() {
    var storedScores = JSON.parse(localStorage.getItem("highScore")) || [];
    console.log(storedScores);
    console.log(showUsers(storedScores));
}

getUsers();

function showUsers(storedScores) {
        storedScores.forEach(highScore => {
        var scoreCountList = document.createElement("li");
        scoreCountList.textContent = `${highScore.initial} -- ${highScore.score}`
        scoreCount.appendChild(scoreCountList);
    });
}

// showUsers();

clear.addEventListener("click", function(){
    scoreCount.innerHTML = "";
});