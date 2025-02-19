function evaluate() {
    const results = {
        CDU: 0,
        AFD: 0,
        Grüne: 0,
        Die_Linke: 0,
        SPD: 0,
        FDP: 0,
    };

    const questions = [
        {
            question: "q1",
            responses: {
                ja: { CDU: -1, AFD: 1, Grüne: 1, Die_Linke: 1, SPD: 1, FDP: 0 },
                nein: { CDU: 1, AFD: -1, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: 0 },
                neutral: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 0, SPD: 0, FDP: 0 },
            },
        },
        {
            question: "q2",
            responses: {
                ja: { CDU: 0, AFD: 0, Grüne: 1, Die_Linke: 1, SPD: 1, FDP: 0 },
                nein: { CDU: -1, AFD: 0, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: -1 },
                neutral: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 0, SPD: 0, FDP: 0 },
            },
        },
        {
            question: "q3",
            responses: {
                ja: { CDU: -1, AFD: -1, Grüne: 1, Die_Linke: 1, SPD: 1, FDP: 0 },
                nein: { CDU: 1, AFD: 1, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: 0 },
                neutral: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 0, SPD: 0, FDP: 0 },
            },
        },
        {
            question: "q4",
            responses: {
                ja: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 1, SPD: 1, FDP: 0 },
                nein: { CDU: -1, AFD: 0, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: 0 },
                neutral: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 0, SPD: 0, FDP: 0 },
            },
        },
        {
            question: "q5",
            responses: {
                ja: { CDU: 0, AFD: 0, Grüne: 1, Die_Linke: 1, SPD: 1, FDP: 1 },
                nein: { CDU: -1, AFD: 0, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: 0 },
                neutral: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 0, SPD: 0, FDP: 0 },
            },
        },
    ];

    questions.forEach((q) => {
        const selectedValue = document.querySelector(`input[name="${q.question}"]:checked`);
        if (selectedValue) {
            const response = selectedValue.value;
            const partyPoints = q.responses[response];
            for (const party in partyPoints) {
                results[party] += partyPoints[party];
            }
        }
    });

    displayResults(results);
}

function displayResults(results) {
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "<h2>Auswertung</h2><p>Ergebnisse:</p><ul>";

    for (const party in results) {
        resultDiv.innerHTML += `<li>${party}: ${results[party]} Punkte</li>`;
    }

    resultDiv.innerHTML += "</ul>";
}
