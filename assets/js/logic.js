var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var quizContainer = document.querySelector("#questions");
var question = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var submit = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");
var timerElement = document.querySelector("#time");

var timer;
var timerCount;
var chooseAnswer = "";
var isWin = false;


function hideIntro() {
    startScreen.classList.add("hide");
  };

startButton.addEventListener("click", hideIntro);

document.getElementById("question-title") = questionsBank.question;


function startGame() {
    isWin = false;
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    // startButton.disabled = true;
    // renderBlanks()
    startTimer()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

// generateQuiz(startButton, questionsBank, question, choices, endScreen, submit, feedback);

// function generateQuiz(startButton, questionsBank, question, choices, endScreen, submit, feedback) {
//     function showQuestions(questionsBank, question) {
//         var output = [];
//         var answers;
        
//         for(var index=0; index<questionsBank.length; index++) {
//             answers = [];
//         }
//     }
// }

// function generateQuiz(){
//     var output = [];
//     questionsBank.forEach(
//         (currentQuestion, questionNumber) => {
//         var answers = [];

//         for(letter in currentQuestion.answers){
//             answers.push(
//                `<label>
//                     <input type="radio" name="question${questionNumber}" value="${letter}">
//                     ${letter} :
//                     ${currentQuestion.answers[letter]}
//                 </label>`
//             );
//         }

//     output.push(
//         `<div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join("")} </div>`
//     );
//     }
//     );
// quizContainer.innerHTML = output.join("");
// }

// questionsBank.forEach( (currentQuestion, questionNumber) => {

// }


  // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);