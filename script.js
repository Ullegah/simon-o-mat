  "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
     "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
    "Soll Deutschland aus der EU austreten?",
     "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
        "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
     "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
    "Soll Deutschland aus der EU austreten?",
     "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
        "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
     "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
    "Soll Deutschland aus der EU austreten?",
     "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
        "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
     "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
    "Soll Deutschland aus der EU austreten?",
     "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
        "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
     "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
    "Soll Deutschland aus der EU austreten?",
     "Soll der Mindestlohn erhöht werden?",
    "Soll Cannabis legalisiert werden?",
    "Soll Deutschland aus der EU austreten?",
    // ... bis zu 50 Fragen
];

// Parteien mit ihren Positionen zu den Fragen
const parteien = {
    "CDU/CSU":  [1, 0, -1, 1, 1,1, 0, -1, 1, 1,1, 0, -1, 1, 1,1, 0, -1, 1, 1,1, 0, -1, 1, 1,1, 0, -1, 1, 1,1, 0, -1, 1, 1,1, 0, -1, 1, 1,1, 0, -1, 1, 1,1, 0, -1, 1, 1],
    "SPD":  [0, 1, -1, -1, 1,0, 1, -1, -1, 1,0, 1, -1, -1, 1,0, 1, -1, -1, 1,0, 1, -1, -1, 1,0, 1, -1, -1, 1,0, 1, -1, -1, 1,0, 1, -1, -1, 1,0, 1, -1, -1, 1,0, 1, -1, -1, 1],
    "Grüne":  [-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0],
    "FDP":  [-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0],
    "AfD":  [-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0],
    "Die Linke":  [-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0,-1, -1, 1, 0, 0]
};

const antwortKategorien = [
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
        ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
        ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
        ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
        ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    ["Links", "Mitte", "Rechts"], // Frage 1
    ["Rechts", "Mitte", "Links"], // Frage 2
    // Füge hier die Kategorien für alle Fragen hinzu
];


document.addEventListener("DOMContentLoaded", ladeFragen);
document.getElementById("auswerten-btn").addEventListener("click", auswerten);

function ladeFragen() {
    const fragenContainer = document.getElementById("fragen-container");
    fragenContainer.innerHTML = ""; // Sicherstellen, dass der Container leer ist

    fragen.forEach((frage, index) => {
        const frageHTML = 
            <div class="frage">
                <p><strong>Frage ${index + 1}:</strong> ${frage}</p>
                <label><input type="radio" name="frage${index}" value="1"> Ja</label>
                <label><input type="radio" name="frage${index}" value="0"> Neutral</label>
                <label><input type="radio" name="frage${index}" value="-1"> Nein</label>
            </div>
        ;
        fragenContainer.innerHTML += frageHTML;
    });
}

function auswerten() {
    const ergebnisse = {};
    const wahlomatForm = document.getElementById("wahlomat-form");
    const kategorienErgebnis = {};

    // Durch alle Fragen iterieren
    fragen.forEach((frage, index) => {
        const antwort = wahlomatForm[frage${index}]?.value; // Verwende optionales chaining
        if (antwort !== undefined) {
            for (const partei in parteien) {
                if (!ergebnisse[partei]) {
                    ergebnisse[partei] = 0;
                }
                ergebnisse[partei] += parteien[partei][index] * parseInt(antwort);
            }

            // Bestimme die politische Ausrichtung der gewählten Antwort
            const kategorie = antwortKategorien[index][parseInt(antwort) + 1]; // +1 wegen der Indexierung
            if (!kategorienErgebnis[kategorie]) {
                kategorienErgebnis[kategorie] = 0;
            }
            kategorienErgebnis[kategorie] += 1; // Zähle die Anzahl der Antworten pro Kategorie
        }
    });

    // Ergebnisse in das Ergebnis-Div einfügen
    const ergebnisDiv = document.getElementById("ergebnis");
    ergebnisDiv.innerHTML = "<h2>Ergebnisse:</h2>";
    for (const partei in ergebnisse) {
        ergebnisDiv.innerHTML += <p>${partei}: ${ergebnisse[partei]}</p>;
    }

    // Diagramm erstellen
    erstelleDiagramm(ergebnisse);

    // Kategorien in das Ergebnis-Div einfügen
    ergebnisDiv.innerHTML += "<h3>Kategorien:</h3>";
    for (const kategorie in kategorienErgebnis) {
        ergebnisDiv.innerHTML += <p>${kategorie}: ${kategorienErgebnis[kategorie]}</p>;
    }
}

function erstelleDiagramm(ergebnisse) {
    const ctx = document.getElementById("ergebnisDiagramm").getContext("2d");
    const parteienNamen = Object.keys(ergebnisse);
    const punkte = parteienNamen.map(partei => ergebnisse[partei]);

    const diagramm = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: parteienNamen,
            datasets: [{
                label: 'Punkte',
                data: punkte,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
