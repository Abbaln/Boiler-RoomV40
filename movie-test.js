// Definierar en array med frågor och svarsalternativ för quizet
const questions = [
  {
    question: "What type of setting do you prefer?", // Första frågan
    answers: [
      { text: "A magical fairy tale kingdom", score: "a" }, // Svarsalternativ med tillhörande poäng
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

// Objekt som mappar poäng till filmrekommendationer
const movieRecommendations = {
  a: "Shrek 2: A hilarious fairy tale adventure!",
  b: "The Lord of the Rings: An epic fantasy journey!",
  c: "The Mummy Returns: Action-packed archaeological thrills!",
  d: "Slim Susie: A quirky Swedish dark comedy!"
};

// Objekt med detaljerad information om varje rekommenderad film
const movieDetails = {
  a: {
    title: "Shrek 2",
    imdbLink: "https://www.imdb.com/title/tt0298148/",
    posterUrl: "images/shrek2.jpg"  // Sökväg till filmaffischen
  },
  b: {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    imdbLink: "https://www.imdb.com/title/tt0120737/",
    posterUrl: "images/lotr.jpg"  // Sökväg till filmaffischen
  },
  c: {
    title: "The Mummy Returns",
    imdbLink: "https://www.imdb.com/title/tt0209163/",
    posterUrl: "images/mummy_returns.jpg"  // Sökväg till filmaffischen
  },
  d: {
    title: "Slim Susie",
    imdbLink: "https://www.imdb.com/title/tt0323998/",
    posterUrl: "images/slim_susie.jpg"  // Sökväg till filmaffischen
  }
};

// Variabel för att hålla koll på aktuell fråga
let currentQuestionIndex = 0;
// Objekt för att lagra användarens poäng
let score = {};

// Hämtar DOM-element som används i quizet
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const resultDiv = document.getElementById('result');
const movieRecommendationElement = document.getElementById('movie-recommendation');

// Funktion för att starta quizet
function startQuiz() {
  currentQuestionIndex = 0; // Återställer frågeindex
  score = {}; // Återställer poängen
  nextButton.classList.add('hide'); // Döljer "Nästa"-knappen
  resultDiv.classList.add('hide'); // Döljer resultatdiven
  showQuestion(questions[currentQuestionIndex]); // Visar första frågan
}

// Funktion för att visa en fråga
function showQuestion(question) {
  questionElement.innerText = question.question; // Sätter frågetexten
  answerButtonsElement.innerHTML = ''; // Rensar tidigare svarsalternativ
  question.answers.forEach(answer => {
    const button = document.createElement('button'); // Skapar en knapp för varje svarsalternativ
    button.innerText = answer.text; // Sätter knappens text
    button.classList.add('btn'); // Lägger till en CSS-klass
    button.addEventListener('click', () => selectAnswer(answer)); // Lägger till en klickhändelse
    answerButtonsElement.appendChild(button); // Lägger till knappen i DOM:en
  });
}

// Funktion som körs när ett svar väljs
function selectAnswer(answer) {
  score[answer.score] = (score[answer.score] || 0) + 1; // Uppdaterar poängen
  currentQuestionIndex++; // Går till nästa fråga
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]); // Visar nästa fråga om det finns fler
  } else {
    showResult(); // Visar resultatet om alla frågor är besvarade
  }
}

// Funktion för att visa quizresultatet
function showResult() {
  questionElement.innerText = ''; // Rensar frågetexten
  answerButtonsElement.innerHTML = ''; // Rensar svarsalternativen
  nextButton.classList.add('hide'); // Döljer "Nästa"-knappen
  resultDiv.classList.remove('hide'); // Visar resultatdiven
  
  const recommendedMovieKey = getRecommendedMovie(); // Hämtar nyckeln för den rekommenderade filmen
  const recommendedMovie = movieDetails[recommendedMovieKey]; // Hämtar detaljer om den rekommenderade filmen
  
  movieRecommendationElement.innerText = movieRecommendations[recommendedMovieKey]; // Visar filmrekommendationen
  
  const moviePoster = document.getElementById('movie-poster');
  const movieLink = document.getElementById('movie-link');
  
  moviePoster.src = recommendedMovie.posterUrl; // Sätter källan för filmaffischen
  moviePoster.alt = `Movie poster for ${recommendedMovie.title}`; // Sätter alt-text för affischen
  movieLink.href = recommendedMovie.imdbLink; // Sätter länken till IMDb
  movieLink.title = `Watch ${recommendedMovie.title}`; // Sätter titelattributet för länken
}

// Funktion för att bestämma den rekommenderade filmen baserat på poäng
function getRecommendedMovie() {
  return Object.entries(score).reduce((a, b) => a[1] > b[1] ? a : b)[0]; // Returnerar nyckeln med högst poäng
}

// Startar quizet när sidan laddas
startQuiz();