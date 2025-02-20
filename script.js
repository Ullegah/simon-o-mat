const questions = [
    {
        question: "Sollten Steuern für hohe Einkommen erhöht werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    {
        question: "Sollte der Klimaschutz Vorrang vor wirtschaftlichem Wachstum haben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    // Füge hier die weiteren 3 Fragen mit der neuen Antwortoption hinzu
];

// Funktion zum Anzeigen der Fragen
function displayQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = ''; // Leere den Container
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;
        q.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.onclick = () => selectAnswer(index, answer.points, button);
            questionDiv.appendChild(button);
        });
        container.appendChild(questionDiv);
    });
}

let userAnswers = Array(questions.length).fill(null);

function selectAnswer(questionIndex, points, selectedButton) {
    // Setze den vorherigen Button zurück
    const buttons = document.querySelectorAll(`#questions-container div:nth-child(${questionIndex + 1}) button`);
    buttons.forEach(button => {
        button.classList.remove('selected');
        button.classList.add('not-selected'); // Hinzufügen der Klasse für nicht ausgewählte Buttons
    });

    // Setze die aktuelle Auswahl
    userAnswers[questionIndex] = points;
    selectedButton.classList.add('selected');
}

document.getElementById('evaluate-button').onclick = () => evaluateResults();

function evaluateResults() {
    const results = { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 };

    userAnswers.forEach(answer => {
        if (answer) { // Nur Punkte addieren, wenn eine Antwort gewählt wurde
            for (const party in answer) {
                results[party] += answer[party];
            }
        }
    });

    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '<h2>Ergebnisse</h2>';
    for (const party in results) {
        resultsContainer.innerHTML += `<p>${party}: ${results[party]} Punkte</p>`;
    }
}

// Initialisiere das Fragen-Display
displayQuestions();
