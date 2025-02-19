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
            "Grüne":  Array(50).fill([-1, -1, 1, 0, 0]).flat(),
            "FDP":  Array(50).fill([-1, -1, 1, 0, 0]).flat(),
            "AfD":  Array(50).fill([-1, -1, 1, 0, 0]).flat(),
            "Die Linke":  Array(50).fill([-1, -1, 1, 0, 0]).flat()
        };
        
        const antwortKategorien = Array(50).fill(["Links", "Mitte", "Rechts"]);
        
        const questionsDiv = document.getElementById("questions");
        for (let i = 0; i < 50; i++) {
            let questionDiv = document.createElement("div");
            questionDiv.classList.add("question");
            questionDiv.innerHTML = `
                <p>Frage ${i + 1}</p>
                <input type="radio" name="question${i}" value="-1"> ${antwortKategorien[i][0]}
                <input type="radio" name="question${i}" value="0"> ${antwortKategorien[i][1]}
                <input type="radio" name="question${i}" value="1"> ${antwortKategorien[i][2]}
            `;
            questionsDiv.appendChild(questionDiv);
        }
        
        function calculateResults() {
            let scores = {};
            Object.keys(parteien).forEach(p => scores[p] = 0);
            
            for (let i = 0; i < 50; i++) {
                let selected = document.querySelector(`input[name=question${i}]:checked`);
                if (selected) {
                    let value = parseInt(selected.value);
                    Object.keys(parteien).forEach(p => {
                        scores[p] += (parteien[p][i] || 0) * value;
                    });
                }
            }
            
            let resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "<h2>Ergebnisse</h2>" + Object.entries(scores).map(([p, s]) => `<p>${p}: ${s}</p>`).join("");
            
            let ctx = document.getElementById("resultsChart").getContext("2d");
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: Object.keys(scores),
                    datasets: [{
                        label: "Punkte",
                        data: Object.values(scores),
                        backgroundColor: ["blue", "red", "green", "yellow", "darkblue", "purple"]
                    }]
                }
            });
        }
    </script>
</body>
</html>
