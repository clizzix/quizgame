// Defining the quiz questions and answers
// Each question has a text and an array of possible answers
// Each answer has text and a boolean indicating if it's correct
// The quiz will display one question at a time and allow the user to select an answer
// After answering, the user can proceed to the next question
// At the end, the user's score will be displayed

const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const quizElement = document.getElementById('quiz');
const scoreContainer = document.getElementById('score-container');
const finalScoreElement = document.getElementById('final-score');
const highscoreBody = document.getElementById('highscore-body');
const nameModal = document.getElementById('name-modal');
const nameInput = document.getElementById('name-input');
const saveNameBtn = document.getElementById('save-name-btn');

let currentQuestionIndex = 0;
let score = 0; 

// Starts the quiz by resetting the score and showing the first question
function startQuiz() {
    quizElement.style.display = "block";
    scoreContainer.style.display = "none";
    nameModal.style.display = "none";
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Displays the current question and its answers
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Resets the state for the next question and removes previous answer buttons
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Handles the answer selection and checks if it's correct
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Show the end results 
function showScore() {
    resetState();
    quizElement.style.display = "none";
    scoreContainer.style.display = "block";
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";

    nameModal.style.display = "block";

    saveHighscore(score);
    displayHighscores();
    nextButton.style.opacity = "1";
}

// Handles the next button click 
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listeners for the next button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
// saves the highscores to local storage
function saveHighscore(newScore) {
    let highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    const playerName = prompt("Enter your name:");
    if (playerName) {
        const highscoreEntry = { name: playerName, score: newScore };
        highscores.push(highscoreEntry);
        highscores.sort((a, b) => b.score - a.score);
        highscores = highscores.slice(0, 10); // Keep only top 10 scores

        localStorage.setItem('highscores', JSON.stringify(highscores));
    }
}
// Displays the highscores in the highscore table
function displayHighscores() {
    let highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    highscoreBody.innerHTML = ""; // Clear previous highscores

    highscores.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.score}</td>
        `;
        highscoreBody.appendChild(row);
    });
}
// Function to save the player's name and score
function saveAndDisplayHighscore() {
    const playerName = nameInput.value || "Anonym";
    let highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    
    const highscoreEntry = { name: playerName, score: score };
    highscores.push(highscoreEntry);
    
    highscores.sort((a, b) => b.score - a.score);
    highscores = highscores.slice(0, 10);
    
    localStorage.setItem('highscores', JSON.stringify(highscores));
    
    nameModal.style.display = "none"; 
    displayHighscores();
    nameInput.value = ""; 
}
// Event listener for saving the player's name
saveNameBtn.addEventListener("click", saveAndDisplayHighscore);

 // Start the quiz when the page loads
 startQuiz();