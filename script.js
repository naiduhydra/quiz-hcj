let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeRemaining = 60;

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  }
  // Add more questions as needed
];

function startQuiz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  document.getElementById("timer-container").style.display = "block";
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = ""; // Clear previous options

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedOption === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("score-container").style.display = "block";
  document.getElementById("score").innerText = score;
  clearInterval(timer); // Stop the timer
}

function startTimer() {
  timer = setInterval(() => {
    timeRemaining--;
    document.getElementById("timer").innerText = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      endQuiz(); // Automatically end quiz if time runs out
    }
  }, 1000);
}

document.getElementById("retry").onclick = function () {
  currentQuestionIndex = 0;
  score = 0;
  timeRemaining = 60;
  document.getElementById("score-container").style.display = "none";
  document.getElementById("start").style.display = "block";
  document.getElementById("timer").innerText = timeRemaining;
};
