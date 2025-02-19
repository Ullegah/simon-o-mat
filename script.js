document.addEventListener("DOMContentLoaded", function () {
    const fragenContainer = document.getElementById("fragen-container");
    const ergebnisDiv = document.getElementById("ergebnis");

    const fragen = [
        "Soll der Mindestlohn erhöht werden?",
        "Soll Cannabis legalisiert werden?",
        "Soll Deutschland aus der EU austreten?",
        // ...füge hier weitere 47 Fragen hinzu
    ];

    // Fragen dynamisch erzeugen
    fragen.forEach((frage, index) => {
        const div = document.createElement("div");
        div.classList.add("frage");
        div.innerHTML = `
            <p>${index + 1}. ${frage}</p>
            <label><input type="radio" name="frage${index}" value="1"> Ja</label>
            <label><input type="radio" name="frage${index}" value="0"> Neutral</label>
            <label><input type="radio" name="frage${index}" value="-1"> Nein</label>
        `;
        fragenContainer.appendChild(div);
    });

    document.getElementById("auswerten-btn").addEventListener("click", function () {
        const antworten = [];
        fragen.forEach((_, index) => {
            const ausgewählt = document.querySelector(`input[name="frage${index}"]:checked`);
            antworten.push(ausgewählt ? parseInt(ausgewählt.value) : 0);
        });

        const ergebnis = berechneErgebnis(antworten);
        ergebnisDiv.innerHTML = `<h2>Ergebnis:</h2><p>${ergebnis}</p>`;
    });

    function berechneErgebnis(antworten) {
        // Hier kommt der Algorithmus für die Übereinstimmung mit den Parteien hin
        return "Parteien-Berechnung folgt...";
    }
});

