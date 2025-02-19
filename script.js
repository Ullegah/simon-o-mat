const fragen = [
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
function berechneErgebnis(antworten) {
    let ergebnisse = {};

    Object.keys(parteien).forEach((partei) => {
        let punkte = 0;
        parteien[partei].forEach((wert, index) => {
            if (wert === antworten[index]) {
                punkte++; // +1 Punkt pro Übereinstimmung
            }
        });
        ergebnisse[partei] = punkte;
    });

    return ergebnisse;
}

// 📊 Ergebnis anzeigen
function zeigeErgebnis(ergebnisse) {
    let ergebnisText = "<h2>Ergebnis:</h2><ul>";
    Object.entries(ergebnisse)
        .sort((a, b) => b[1] - a[1]) // Sortiert nach Punkten (höchste zuerst)
        .forEach(([partei, punkte]) => {
            ergebnisText += `<li><strong>${partei}:</strong> ${punkte} Punkte</li>`;
        });

    ergebnisText += "</ul>";
    document.getElementById("ergebnis").innerHTML = ergebnisText;
}
