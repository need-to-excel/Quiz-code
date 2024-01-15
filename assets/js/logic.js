var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var quizContainer = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var submit = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");
var timerElement = document.querySelector("#time");

var timer;
var timerCount;
var chooseAnswer = "";
var isWin = false;

var shuffleQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    quizContainer.classList.remove("hide");
    shuffleQuestions = questionsBank.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();

}

function setNextQuestion() {
    showQuestions(questionsBank[currentQuestionIndex]);
}

function showQuestions(question) {
    questionTitle.textContent = question.question;
    choices.innerHTML = "";
    for(const key in question.answers) {
        const answer = question.answers[key];
        console.log(answer);
        var button = document.createElement("button");
        button.textContent = key + ": " + answer;
        button.classList.add("btn");
        if(key === question.correctAnswer) {
            button.dataset.correct = true;
        }
        button.addEventListener("click", selectAnswer);
        choices.appendChild(button);
    }    
    };

function selectAnswer(event) {
    const thisButton = event.target;
if(!thisButton.dataset.correct) {
    console.log("this is incorrect")
}
currentQuestionIndex++;
setNextQuestion();
}



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


function hideIntro() {
    startScreen.classList.add("hide");
  };

startButton.addEventListener("click", hideIntro);

// document.getElementById("question-title") = questionsBank.question;
// function getQuestions() {
//     startButton
// }
// question.addEventListener("click")


// function startGame() {
//     isWin = false;
//     timerCount = 60;
//     // Prevents start button from being clicked when round is in progress
//     // startButton.disabled = true;
//     // renderBlanks()
//     startTimer()
// }

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {
//         // Tests if win condition is met
//         if (isWin && timerCount > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//           winGame();
//         }
//       }
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000);
//   }

//   function generateQuiz() {
//     var output = [];
//     var answers;

//     for(var index = 0; index < questionsBank.length; index++) {
//         answers = [];
//         console.log(answers)
//     }
//   }

//   Quiz(startButton, questionsBank, question, choices, endScreen, submit, feedback);

// function generateQuiz(startButton, questionsBank, question, choices, endScreen, submit, feedback) {
//     function showQuestions(questionsBank, question) {
//         var output = [];
//         var answers;
        
//         for(var index=0; index<questionsBank.length; index++) {
//             answers = [];
//         }
//     }
// }

// startButton.addEventListener("click", generateQuiz);

// questionsBank.forEach( (currentQuestion, questionNumber) => {

// }


  //Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);