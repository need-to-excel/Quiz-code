var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var quizContainer = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");
var timerElement = document.querySelector("#time");

var timer;
var timerCount;
var chooseAnswer = "";
var isWin = false;
var score = 0;
var winCounter = 0;

function hideIntro() {
    startScreen.classList.add("hide");
  };

startButton.addEventListener("click", hideIntro);

var shuffleQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    quizContainer.classList.remove("hide");
    shuffleQuestions = questionsBank.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    isWin = false;
    timerCount = 60;
    setNextQuestion();
    startTimer();

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
            score++;
            console.log(score);
      }
        button.addEventListener("click", selectAnswer);
        choices.appendChild(button);
    }    
    };

function selectAnswer(event) {
    const thisButton = event.target;
if(!thisButton.dataset.correct) {
    console.log("this is incorrect");
    timerCount = timerCount - 10;
}  
currentQuestionIndex++;
if(currentQuestionIndex > questionsBank.length - 1) {
    endQuiz();
}
else {
setNextQuestion();
}
}

function startTimer() {
    
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        
        if (isWin && timerCount > 0) {
         
          clearInterval(timer);
     }
      }
      
      if (timerCount <= 0) {
        endQuiz();
     }
    }, 1000);
  }

  function endQuiz() {
    clearInterval(timer);
    endScreen.classList.remove("hide");
    finalScore.textContent = score;
    quizContainer.classList.add("hide");
  }

  submit.addEventListener("click", storingInitials )
  function storingInitials() {
  console.log(initials.value);
  var highScore = {initial: initials.value, score: score}
  storedScores.push(highScore);
  localStorage.setItem("highScore", JSON.stringify(storedScores));
  
  }
  
  var storedScores = JSON.parse(localStorage.getItem("highScore")) || [];
  console.log(storedScores);