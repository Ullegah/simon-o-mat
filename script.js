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

// ✅ Berechnung der Punkte
function auswerten() {
    const ergebnisse = {};
    const wahlomatForm = document.getElementById("wahlomat-form");

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
        }
    });

    // Ergebnisse in das Ergebnis-Div einfügen
    const ergebnisDiv = document.getElementById("ergebnis");
    ergebnisDiv.innerHTML = "<h2>Ergebnisse:</h2>";
    for (const partei in ergebnisse) {
        ergebnisDiv.innerHTML += `<p>${partei}: ${ergebnisse[partei]}</p>`;
    }

    // Diagramm erstellen
    const ctx = document.getElementById('ergebnis-chart').getContext('2d');
    const chartData = {
        labels: Object.keys(ergebnisse),
        datasets: [{
            label: 'Punkte',
            data: Object.values(ergebnisse),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // CDU/CSU
                'rgba(54, 162, 235, 0.2)', // SPD
                'rgba(75, 192, 192, 0.2)', // Grüne
                'rgba(153, 102, 255, 0.2)', // FDP
                'rgba(255, 159, 64, 0.2)', // AfD
                'rgba(255, 205, 86, 0.2)', // Die Linke
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
            ],
            borderWidth: 1
        }]
    };

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
