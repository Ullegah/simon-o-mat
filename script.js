const questions = [
    {
        questionText: "Sollten Unternehmen höhere Steuern zahlen?",
    },
    {
        questionText: "Sollte der Staat mehr in Bildung investieren?",
    },
    {
        questionText: "Sollten Flüchtlinge mehr Unterstützung erhalten?",
    },
    {
        questionText: "Sollte die Rentenpolitik reformiert werden?",
    },
    {
        questionText: "Sollten umweltfreundliche Technologien gefördert werden?",
    },
];

// Funktion zum Laden der Fragen in das DOM
function loadQuestions() {
    const questionsDiv = document.getElementById("questions");
    questionsDiv.innerHTML = ""; // Vorherige Fragen löschen
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
