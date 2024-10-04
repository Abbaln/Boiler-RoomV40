const questions = [
  {
    question: "What type of setting do you prefer?",
    answers: [
      { text: "A magical fairy tale kingdom", score: "a" },
      { text: "A fantasy world with different races", score: "b" },
      { text: "Ancient Egypt and its mysteries", score: "c" },
      { text: "A small town in Sweden", score: "d" }
    ]
  },
  {
    question: "Choose your favorite type of character:",
    answers: [
      { text: "A lovable ogre", score: "a" },
      { text: "A brave hobbit", score: "b" },
      { text: "An adventurous archaeologist", score: "c" },
      { text: "A quirky local", score: "d" }
    ]
  },
  {
    question: "What's your preferred movie theme?",
    answers: [
      { text: "Family and acceptance", score: "a" },
      { text: "Epic quests and friendship", score: "b" },
      { text: "Ancient curses and action", score: "c" },
      { text: "Dark humor and local culture", score: "d" }
    ]
  }
];

const movieRecommendations = {
  a: "Shrek 2: A hilarious fairy tale adventure!",
  b: "The Lord of the Rings: An epic fantasy journey!",
  c: "The Mummy Returns: Action-packed archaeological thrills!",
  d: "Slim Susie: A quirky Swedish dark comedy!"
};

let currentQuestionIndex = 0;
let score = {};

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const resultDiv = document.getElementById('result');
const movieRecommendationElement = document.getElementById('movie-recommendation');

function startQuiz() {
  currentQuestionIndex = 0;
  score = {};
  nextButton.classList.add('hide');
  resultDiv.classList.add('hide');
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = '';
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(answer) {
  score[answer.score] = (score[answer.score] || 0) + 1;
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.innerText = '';
  answerButtonsElement.innerHTML = '';
  nextButton.classList.add('hide');
  resultDiv.classList.remove('hide');
  
  const recommendedMovie = getRecommendedMovie();
  movieRecommendationElement.innerText = recommendedMovie;
}

function getRecommendedMovie() {
  const maxScore = Object.entries(score).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  return movieRecommendations[maxScore];
}

startQuiz();
