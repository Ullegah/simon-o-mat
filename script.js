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

    const questions = [
        {
            question: "q1",
            responses: {
                ja: { CDU: -1, AFD: 1, Grüne: 1, Die_Linke: 1, SPD: 1, FDP: 0 },
                nein: { CDU: 1, AFD: -1, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: 0 },
                neutral: {},
            },
        },
        {
            question: "q2",
            responses: {
                ja: { CDU: 0, AFD: 0, Grüne: 1, Die_Linke: 1, SPD: 1, FDP: 0 },
                nein: { CDU: -1, AFD: 0, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: -1 },
                neutral: {},
            },
        },
        {
            question: "q3",
            responses: {
                ja: { CDU: -1, AFD: -1, Grüne: 1, Die_Linke: 1, SPD: 1, FDP: 0 },
                nein: { CDU: 1, AFD: 1, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: 0 },
                neutral: {},
            },
        },
        {
            question: "q4",
            responses: {
                ja: { CDU: 0, AFD: 0, Grüne: 0, Die_Linke: 1, SPD: 1, FDP: 0 },
                nein: { CDU: -1, AFD: 0, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: 0 },
                neutral: {},
            },
        },
        {
            question: "q5",
            responses: {
                ja: { CDU: 0, AFD: 0, Grüne: 1, Die_Linke: 1, SPD: 1, FDP: 1 },
                nein: { CDU: -1, AFD: 0, Grüne: -1, Die_Linke: -1, SPD: -1, FDP: 0 },
                neutral: {},
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
            if (response === "ja") {
                directionCounts.rechts++;
            } else if (response === "nein") {
                directionCounts.links++;
            }
        }
    });

    displayResults(results, directionCounts);
}

function displayResults(results, directionCounts) {
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "<h2>Auswertung</h2><p>Ergebnisse:</p><ul>";

    for (const party in results) {
        resultDiv.innerHTML += `<li>${party}: ${results[party]} Punkte</li>`;
    }

    resultDiv.innerHTML += `</ul><p>Fragen mit rechts: ${directionCounts.rechts}</p><p>Fragen mit links: ${directionCounts.links}</p>`;
}
