// Defining the quiz questions and answers
// Each question has a text and an array of possible answers
// Each answer has text and a boolean indicating if it's correct
// The quiz will display one question at a time and allow the user to select an answer
// After answering, the user can proceed to the next question
// At the end, the user's score will be displayed

const questions = [
    {
        question: "Was ist der Hauptzweck eines REST-APIs?",
        answers: [
            { text: "Zum Definieren der Benutzeroberfläche", correct: false },
            { text: "Zum Speichern von Daten auf dem Client", correct: false },
            { text: "Zum Kommunizieren zwischen Server und Client", correct: true },
            { text: "Zum Kompilieren von JavaScript-Code", correct: false },
        ]
    },
    {
        question: "Welches Frontend-Framework nutzt virtuelle DOMs zur Leistungssteigerung?",
        answers: [
            { text: "Angular", correct: false },
            { text: "Vue.js", correct: false },
            { text: "React", correct: true },
            { text: "jQuery", correct: false },
        ]
    },
    {
        question: "Was ist ein 'Callback Hell' in Node.js?",
        answers: [
            { text: "Ein Fehler, der durch falsche Syntax verursacht wird", correct: false },
            { text: "Eine Form der Datenspeicherung", correct: false },
            { text: "Eine verschachtelte Struktur von Callback-Funktionen", correct: true },
            { text: "Ein Problem bei der Serverkonfiguration", correct: false },
        ]
    },
    {
        question: "Welche der folgenden Datenbanken ist eine relationale Datenbank?",
        answers: [
            { text: "MongoDB", correct: false },
            { text: "Redis", correct: false },
            { text: "PostgreSQL", correct: true },
            { text: "Cassandra", correct: false },
        ]
    },
    {
        question: "Was ist ein 'npm' im Kontext von Node.js?",
        answers: [
            { text: "Ein Webserver", correct: false },
            { text: "Ein Paketmanager für JavaScript", correct: true },
            { text: "Ein JavaScript-Compiler", correct: false },
            { text: "Ein Debugging-Tool", correct: false },
        ]
    },
    {
        question: "Welches Protokoll wird standardmäßig für die sichere Datenübertragung im Web verwendet?",
        answers: [
            { text: "HTTP", correct: false },
            { text: "FTP", correct: false },
            { text: "SMTP", correct: false },
            { text: "HTTPS", correct: true },
        ]
    },
    {
        question: "Was ist der Hauptvorteil von Single-Page Applications (SPAs)?",
        answers: [
            { text: "Schnellere anfängliche Ladezeiten", correct: false },
            { text: "Bessere SEO-Performance", correct: false },
            { text: "Reibungslosere Benutzererfahrung nach dem ersten Laden", correct: true },
            { text: "Sie erfordern keinen Webserver", correct: false },
        ]
    },
    {
        question: "Was ist eine 'Migration' in einer Datenbank?",
        answers: [
            { text: "Das Sichern von Daten", correct: false },
            { text: "Das Ändern des Datenbankschemas", correct: true },
            { text: "Das Löschen von Daten", correct: false },
            { text: "Das Importieren von Daten", correct: false },
        ]
    },
    {
        question: "Welcher Statuscode signalisiert eine erfolgreiche HTTP-Anfrage?",
        answers: [
            { text: "404 Not Found", correct: false },
            { text: "500 Internal Server Error", correct: false },
            { text: "200 OK", correct: true },
            { text: "301 Moved Permanently", correct: false },
        ]
    },
    {
        question: "Was ist 'Middleware' in Express.js?",
        answers: [
            { text: "Eine Datenbank-Schnittstelle", correct: false },
            { text: "Eine Funktion, die Anfragen verarbeitet, bevor sie zur Route gelangen", correct: true },
            { text: "Ein Frontend-Framework", correct: false },
            { text: "Ein Code-Compiler", correct: false },
        ]
    },
    {
        question: "Was ist ein 'Promise' in JavaScript?",
        answers: [
            { text: "Eine Funktion, die sofort ausgeführt wird", correct: false },
            { text: "Ein Objekt für die Verwaltung asynchroner Operationen", correct: true },
            { text: "Ein Datentyp wie String oder Number", correct: false },
            { text: "Eine Art von Schleife", correct: false },
        ]
    },
    {
        question: "Was ist ein 'Cross-Site Scripting (XSS)' Angriff?",
        answers: [
            { text: "Ein Angriff, bei dem die Datenbank gestohlen wird", correct: false },
            { text: "Ein Angriff, bei dem bösartiger Code in die Website injiziert wird", correct: true },
            { text: "Ein Denial-of-Service-Angriff", correct: false },
            { text: "Ein Angriff auf die Server-Hardware", correct: false },
        ]
    },
    {
        question: "Was ist der Zweck von `package.json`?",
        answers: [
            { text: "Zum Speichern von Benutzerdaten", correct: false },
            { text: "Zum Definieren von Projekt-Metadaten und Abhängigkeiten", correct: true },
            { text: "Zum Konfigurieren des Webservers", correct: false },
            { text: "Zum Schreiben von CSS-Styles", correct: false },
        ]
    },
    {
        question: "Was ist 'Docker'?",
        answers: [
            { text: "Ein JavaScript-Framework", correct: false },
            { text: "Ein Tool zur Containerisierung von Anwendungen", correct: true },
            { text: "Ein Webserver", correct: false },
            { text: "Ein Versionskontrollsystem", correct: false },
        ]
    },
    {
        question: "Welche Methode wird in REST-APIs verwendet, um eine Ressource zu aktualisieren?",
        answers: [
            { text: "GET", correct: false },
            { text: "POST", correct: false },
            { text: "DELETE", correct: false },
            { text: "PUT / PATCH", correct: true },
        ]
    },
    {
        question: "Was ist 'Agile Softwareentwicklung'?",
        answers: [
            { text: "Ein linearer Prozess mit starren Phasen", correct: false },
            { text: "Ein Ansatz, der auf iterativen Zyklen und Flexibilität basiert", correct: true },
            { text: "Ein System für die Verwaltung von Datenbanken", correct: false },
            { text: "Eine Methode zur Code-Optimierung", correct: false },
        ]
    },
    {
        question: "Welche Sprache wird hauptsächlich für das Styling von Webseiten verwendet?",
        answers: [
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false },
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
        ]
    },
    {
        question: "Was ist 'SEO'?",
        answers: [
            { text: "Secure Encryption Option", correct: false },
            { text: "Server-side Optimization", correct: false },
            { text: "Search Engine Optimization", correct: true },
            { text: "Software Engineering Operations", correct: false },
        ]
    },
    {
        question: "Was ist die Hauptfunktion einer 'Git-Branch'?",
        answers: [
            { text: "Zum Löschen von Dateien", correct: false },
            { text: "Zum Erstellen einer isolierten Entwicklungslinie", correct: true },
            { text: "Zum Hochladen von Code auf einen Server", correct: false },
            { text: "Zum Ausführen von Tests", correct: false },
        ]
    },
    {
        question: "Was ist ein 'ORM' im Backend?",
        answers: [
            { text: "Online Resource Manager", correct: false },
            { text: "Object-Relational Mapping", correct: true },
            { text: "Output Rendering Module", correct: false },
            { text: "Operational Runtime Monitor", correct: false },
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
    shuffleArray(questions);
    quizElement.style.display = "block";
    scoreContainer.style.display = "none";
    nameModal.style.display = "none";
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Shuffles the questions in the beginning
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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