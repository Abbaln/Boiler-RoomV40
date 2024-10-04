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

const movieDetails = {
  a: {
    title: "Shrek 2",
    imdbLink: "https://www.imdb.com/title/tt0298148/",
    posterUrl: "images/shrek2.jpg"  // Uppdatera denna sökväg
  },
  b: {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    imdbLink: "https://www.imdb.com/title/tt0120737/",
    posterUrl: "images/lotr.jpg"  // Uppdatera denna sökväg
  },
  c: {
    title: "The Mummy Returns",
    imdbLink: "https://www.imdb.com/title/tt0209163/",
    posterUrl: "images/mummy_returns.jpg"  // Uppdatera denna sökväg
  },
  d: {
    title: "Slim Susie",
    imdbLink: "https://www.imdb.com/title/tt0323998/",
    posterUrl: "images/slim_susie.jpg"  // Uppdatera denna sökväg
  }
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
  
  const recommendedMovieKey = getRecommendedMovie();
  const recommendedMovie = movieDetails[recommendedMovieKey];
  
  movieRecommendationElement.innerText = movieRecommendations[recommendedMovieKey];
  
  const moviePoster = document.getElementById('movie-poster');
  const movieLink = document.getElementById('movie-link');
  
  moviePoster.src = recommendedMovie.posterUrl;
  moviePoster.alt = `Movie poster for ${recommendedMovie.title}`;
  movieLink.href = recommendedMovie.imdbLink;
  movieLink.title = `Watch ${recommendedMovie.title}`; // Lägg till denna rad
}

function getRecommendedMovie() {
  return Object.entries(score).reduce((a, b) => a[1] > b[1] ? a : b)[0];
}

startQuiz();
