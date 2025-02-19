const questions = [
    {
        question: "Sollten Steuern für hohe Einkommen erhöht werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
        ]
    },
    {
        question: "Sollte der Klimaschutz Vorrang vor wirtschaftlichem Wachstum haben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
        ]
    },
    // Füge hier die weiteren 3 Fragen hinzu
];

// Funktion zum Anzeigen der Fragen
function displayQuestions() {
    const container = document.getElementById('questions-container');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;
        q.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.onclick = () => selectAnswer(index, answer.points);
            questionDiv.appendChild(button);
        });
        container.appendChild(questionDiv);
    });
}

let userAnswers = [];

function selectAnswer(questionIndex, points) {
    userAnswers[questionIndex] = points;
}

document.getElementById('evaluate-button').onclick = () => evaluateResults();

function evaluateResults() {
    // Auswertungslogik hier einfügen
}

// Initialisiere das Fragen-Display
displayQuestions();

function evaluateResults() {
    const results = { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 };

    userAnswers.forEach(answer => {
        for (const party in answer) {
            results[party] += answer[party];
        }
    });

    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '<h2>Ergebnisse</h2>';
    for (const party in results) {
        resultsContainer.innerHTML += `<p>${party}: ${results[party]} Punkte</p>`;
    }
}

