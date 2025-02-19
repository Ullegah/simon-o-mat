const questions = [
    {
        questionText: "Sollten Unternehmen höhere Steuern zahlen?",
        responses: {
            ja: { CDU: -1, AFD: 1, Grüne: 1, Die_Linke: 1, SPD: 1, FDP: 0 },
            nein: { CDU: 1, AFD: -1, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: 0 },
            neutral: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 0, SPD: 0, FDP: 0 },
        },
    },
    {
        questionText: "Sollte der Staat mehr in Bildung investieren?",
        responses: {
            ja: { CDU: 0, AFD: 0, Grüne: 1, Die_Linke: 1, SPD: 1, FDP: 0 },
            nein: { CDU: -1, AFD: 0, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: -1 },
            neutral: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 0, SPD: 0, FDP: 0 },
        },
    },
    {
        questionText: "Sollten Flüchtlinge mehr Unterstützung erhalten?",
        responses: {
            ja: { CDU: -1, AFD: -1, Grüne: 1, Die_Linke: 1, SPD: 1, FDP: 0 },
            nein: { CDU: 1, AFD: 1, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: 0 },
            neutral: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 0, SPD: 0, FDP: 0 },
        },
    },
    {
        questionText: "Sollte die Rentenpolitik reformiert werden?",
        responses: {
            ja: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 1, SPD: 1, FDP: 0 },
            nein: { CDU: -1, AFD: 0, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: 0 },
            neutral: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 0, SPD: 0, FDP: 0 },
        },
    },
    {
        questionText: "Sollten umweltfreundliche Technologien gefördert werden?",
        responses: {
            ja: { CDU: 0, AFD: 0, Grüne: 1, Die_Linke: 1, SPD: 1, FDP: 1 },
            nein: { CDU: -1, AFD: 0, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: 0 },
            neutral: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 0, SPD: 0, FDP: 0 },
        },
    },
];

// Funktion zum Laden der Fragen in das DOM
function loadQuestions() {
    const questionsDiv = document.getElementById("questions");
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";
        questionDiv.innerHTML = `
            <p>${index + 1}. Frage: ${q.questionText}</p>
            <label><input type="radio" name="q${index + 1}" value="ja"> Ja</label>
            <label><input type="radio" name="q${index + 1}" value="nein"> Nein</label>
            <label><input type="radio" name="q${index + 1}" value="neutral"> Neutral</label>
        `;
        questionsDiv.appendChild(questionDiv);
    });
}

// Funktion zur Auswertung der Antworten
function evaluate() {
    const results = {
        CDU: 0,
        AFD: 0,
        Grüne: 0,
        Die_Linke: 0,
        SPD: 0,
        FDP: 0,
    };

    const directionCounts = {
        rechts: 0,
        links: 0,
    };

    questions.forEach((q, index) => {
        const selectedValue = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selectedValue) {
            const response = selectedValue.value;
            const partyPoints = q.responses[response];
            for (const party in partyPoints) {
                results[party] += partyPoints[party];
            }
            if (response === "ja") {
                directionCounts.rechts++;
            } else if (response === "nein") {
                directionCounts.links++;
            }
        }
    });

    displayResults(results, directionCounts);
}

// Funktion zur Anzeige der Ergebnisse
function displayResults(results, directionCounts) {
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "<h2>Auswertung</h2><p>Ergebnisse:</p><ul>";

    for (const party in results) {
        resultDiv.innerHTML += `<li>${party}: ${results[party]} Punkte</li>`;
    }

    resultDiv.innerHTML += `</ul><p>Fragen mit rechts: ${directionCounts.rechts}</p><p>Fragen mit links: ${directionCounts.links}</p>`;
}

// Aufruf der loadQuestions-Funktion beim Laden der Seite
window.onload = loadQuestions;
