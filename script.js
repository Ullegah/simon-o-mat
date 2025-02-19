const fragen = [
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

document.addEventListener("DOMContentLoaded", function() {
    ladeFragen(); // Ruft die Funktion zum Laden der Fragen auf
});

// Fragen in die Seite einfügen
function ladeFragen() {
    const fragenContainer = document.getElementById("fragen-container");
    fragenContainer.innerHTML = ""; // Sicherstellen, dass der Container leer ist

    fragen.forEach((frage, index) => {
        const frageHTML = `
            <div class="frage">
                <p><strong>Frage ${index + 1}:</strong> ${frage}</p>
                <label><input type="radio" name="frage${index}" value="1"> Ja</label>
                <label><input type="radio" name="frage${index}" value="0"> Neutral</label>
                <label><input type="radio" name="frage${index}" value="-1"> Nein</label>
            </div>
        `;
        fragenContainer.innerHTML += frageHTML;
    });
}

// Beim Laden der Seite die Fragen einfügen
window.onload = ladeFragen;

// Klick-Event für die Auswertung
document.getElementById("auswerten-btn").addEventListener("click", function () {
    const antworten = [];
    fragen.forEach((_, index) => {
        const ausgewählt = document.querySelector(`input[name="frage${index}"]:checked`);
        antworten.push(ausgewählt ? parseInt(ausgewählt.value) : 0);
    });

    const ergebnis = berechneErgebnis(antworten);
    zeigeErgebnis(ergebnis);
});

function auswerten() {
    const ergebnisse = {};
    const wahlomatForm = document.getElementById("wahlomat-form");
    const kategorienErgebnis = {};

    // Durch alle Fragen iterieren
    fragen.forEach((frage, index) => {
        const antwort = wahlomatForm[`frage${index}`].value;
        if (antwort) {
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
        ergebnisDiv.innerHTML += `<p>${partei}: ${ergebnisse[partei]}</p>`;
    }

    // Diagramm erstellen (wie zuvor)

    // Kategorien in das Ergebnis-Div einfügen
    ergebnisDiv.innerHTML += "<h3>Kategorien:</h3>";
    for (const kategorie in kategorienErgebnis) {
        ergebnisDiv.innerHTML += `<p>${kategorie}: ${kategorienErgebnis[kategorie]}</p>`;
    }
}
