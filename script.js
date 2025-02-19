const fragen = [
    "Sollten die Steuern erhöht werden?",
    "Soll die Bundeswehr ausgebaut werden?",
    "Soll der Mindestlohn erhöht werden?",
    "Soll das Grundeinkommen eingeführt werden?",
    "Soll die Förderung erneuerbarer Energien steigen?",
    "Soll die EU stärker kontrolliert werden?",
    "Soll der Verkehr auf öffentliche Verkehrsmittel umgestellt werden?",
    "Soll die Atomkraft abgeschafft werden?",
    "Soll die Schuldenbremse bestehen bleiben?",
    "Soll der Zugang zu Gesundheitsdiensten verbessert werden?",
    "Soll das Bildungssystem reformiert werden?",
    "Soll die Einwanderung kontrolliert werden?",
    "Soll der Kohleausstieg beschleunigt werden?",
    "Soll das Bargeld abgeschafft werden?",
    "Soll die Rente steigen?",
    "Soll das Verbot von Tierversuchen beibehalten werden?",
    "Soll die Digitalisierung in Schulen gefördert werden?",
    "Soll die Überwachung durch den Staat zunehmen?",
    "Soll der Mindestabstand zu Windkraftanlagen erhöht werden?",
    "Soll die Lobbyarbeit transparenter werden?",
    "Soll die Landwirtschaft umweltfreundlicher werden?",
    "Soll der Wehrdienst wieder eingeführt werden?",
    "Soll der öffentlich-rechtliche Rundfunk reformiert werden?",
    "Soll die Gendergerechtigkeit gefördert werden?",
    "Soll die EU-Armee eingeführt werden?",
    "Soll die Unterstützung für Familien erhöht werden?",
    "Soll der Zugang zu Bildung kostenlos sein?",
    "Soll die Verbreitung von Fake News stärker bestraft werden?",
    "Soll der Verkehr auf Elektromobilität umgestellt werden?",
    "Soll die Altersvorsorge reformiert werden?",
    "Soll die Schulpflicht abgeschafft werden?",
    "Soll die Drogenpolitik liberalisiert werden?",
    "Soll die Digitalisierung der Verwaltung vorangetrieben werden?",
    "Soll der Einzelhandel am Sonntag geöffnet sein?",
    "Soll die Förderung von Start-ups erhöht werden?"
];

// Zuordnung von Antworten
const positionen = [
    ["Links", "Mitte", "Rechts"],
    ["Rechts", "Mitte", "Links"],
    ["Links", "Mitte", "Rechts"],
    ["Links", "Mitte", "Rechts"],
    ["Mitte", "Links", "Rechts"],
    ["Rechts", "Mitte", "Links"],
    ["Links", "Mitte", "Rechts"],
    ["Mitte", "Rechts", "Links"],
    ["Rechts", "Mitte", "Links"],
    ["Links", "Mitte", "Rechts"],
    ["Mitte", "Links", "Rechts"],
    ["Rechts", "Mitte", "Links"],
    ["Links", "Mitte", "Rechts"],
    ["Mitte", "Rechts", "Links"],
    ["Links", "Mitte", "Rechts"],
    ["Links", "Mitte", "Rechts"],
    ["Mitte", "Links", "Rechts"],
    ["Rechts", "Mitte", "Links"],
    ["Rechts", "Mitte", "Links"],
    ["Mitte", "Links", "Rechts"],
    ["Links", "Mitte", "Rechts"],
    ["Rechts", "Mitte", "Links"],
    ["Mitte", "Links", "Rechts"],
    ["Links", "Mitte", "Rechts"],
    ["Rechts", "Mitte", "Links"],
    ["Links", "Mitte", "Rechts"],
    ["Rechts", "Mitte", "Links"],
    ["Links", "Mitte", "Rechts"],
    ["Mitte", "Rechts", "Links"],
    ["Rechts", "Mitte", "Links"],
    ["Mitte", "Links", "Rechts"],
    ["Rechts", "Mitte", "Links"],
    ["Mitte", "Links", "Rechts"]
];

// Parteien und ihre Positionen zu den Fragen (0 = Neutral, 1 = Ja, -1 = Nein)
const parteien = {
    "CDU/CSU": [0, 1, 0, 1, 0, 1, -1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, -1, 0, 0, 1, 1, 0, 1, 1],
    "SPD": [1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1],
    "Grüne": [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1],
    "FDP": [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    "AfD": [-1, 1, -1, 0, 0, 1, 1, -1, 1, 1, 0, -1, 1, -1, 0, 0, 0, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 1, -1, -1],
    "Die Linke": [1, -1, 1, 1, 1, -1, 1, 1, -1, 0, 1, -1, 1, 1, 1, -1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0],
};

let currentQuestionIndex = 0;
let results = {};

function initializeResults() {
    for (const partei in parteien) {
        results[partei] = 0;
    }
}

function displayQuestion() {
    if (currentQuestionIndex < fragen.length) {
        const frage = fragen[currentQuestionIndex];
        const fragenContainer = document.getElementById('fragenContainer');
        fragenContainer.innerHTML = `
            <div class="question">
                <h2>Frage ${currentQuestionIndex + 1}: ${frage}</h2>
                <input type="radio" name="antwort" value="1"> Ja<br>
                <input type="radio" name="antwort" value="0"> Neutral<br>
                <input type="radio" name="antwort" value="-1"> Nein<br>
            </div>
        `;
    } else {
        displayFinalResults();
    }
}

function nextQuestion() {
    const selectedValue = document.querySelector('input[name="antwort"]:checked');
    if (selectedValue) {
        const value = parseInt(selectedValue.value);
        for (const partei in parteien) {
            results[partei] += parteien[partei][currentQuestionIndex] * value;
        }
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert("Bitte wählen Sie eine Antwort.");
    }
}

function displayFinalResults() {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '<h2>Ergebnisse:</h2>';
    for (const partei in results) {
        resultContainer.innerHTML += `<p>${partei}: ${results[partei]}</p>`;
    }
}

// Initialisierung
initializeResults();
displayQuestion();
