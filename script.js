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

// Fragen laden, wenn das Dokument vollständig geladen ist
document.addEventListener("DOMContentLoaded", loadQuestions);
