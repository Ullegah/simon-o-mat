 const fragen = [
            { text: "Sollten die Steuern erhöht werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll die Bundeswehr ausgebaut werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Rechts", "Mitte", "Links"] },
            { text: "Soll der Mindestlohn erhöht werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll das Grundeinkommen eingeführt werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll die Förderung erneuerbarer Energien steigen?", antworten: ["Ja", "Neutral", "Nein"], position: ["Mitte", "Links", "Rechts"] },
            { text: "Soll die EU stärker kontrolliert werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Rechts", "Mitte", "Links"] },
            { text: "Soll der Verkehr auf öffentliche Verkehrsmittel umgestellt werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll die Atomkraft abgeschafft werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Mitte", "Rechts", "Links"] },
            { text: "Soll die Schuldenbremse bestehen bleiben?", antworten: ["Ja", "Neutral", "Nein"], position: ["Rechts", "Mitte", "Links"] },
            { text: "Soll der Zugang zu Gesundheitsdiensten verbessert werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll das Bildungssystem reformiert werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Mitte", "Links", "Rechts"] },
            { text: "Soll die Einwanderung kontrolliert werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Rechts", "Mitte", "Links"] },
            { text: "Soll der Kohleausstieg beschleunigt werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll das Bargeld abgeschafft werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Mitte", "Rechts", "Links"] },
            { text: "Soll die Rente steigen?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll das Verbot von Tierversuchen beibehalten werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll die Digitalisierung in Schulen gefördert werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Mitte", "Links", "Rechts"] },
            { text: "Soll die Überwachung durch den Staat zunehmen?", antworten: ["Ja", "Neutral", "Nein"], position: ["Rechts", "Mitte", "Links"] },
            { text: "Soll der Mindestabstand zu Windkraftanlagen erhöht werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Rechts", "Mitte", "Links"] },
            { text: "Soll die Lobbyarbeit transparenter werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Mitte", "Links", "Rechts"] },
            { text: "Soll die Landwirtschaft umweltfreundlicher werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll der Wehrdienst wieder eingeführt werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Rechts", "Mitte", "Links"] },
            { text: "Soll der öffentlich-rechtliche Rundfunk reformiert werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Mitte", "Links", "Rechts"] },
            { text: "Soll die Gendergerechtigkeit gefördert werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll die EU-Armee eingeführt werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Rechts", "Mitte", "Links"] },
            { text: "Soll die Unterstützung für Familien erhöht werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Mitte", "Links", "Rechts"] },
            { text: "Soll der Zugang zu Bildung kostenlos sein?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll die Verbreitung von Fake News stärker bestraft werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Mitte", "Links", "Rechts"] },
            { text: "Soll der Verkehr auf Elektromobilität umgestellt werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll die Altersvorsorge reformiert werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Mitte", "Links", "Rechts"] },
            { text: "Soll die Schulpflicht abgeschafft werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Rechts", "Mitte", "Links"] },
            { text: "Soll die Drogenpolitik liberalisiert werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Links", "Mitte", "Rechts"] },
            { text: "Soll die Digitalisierung der Verwaltung vorangetrieben werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Mitte", "Links", "Rechts"] },
            { text: "Soll der Einzelhandel am Sonntag geöffnet sein?", antworten: ["Ja", "Neutral", "Nein"], position: ["Rechts", "Mitte", "Links"] },
            { text: "Soll die Förderung von Start-ups erhöht werden?", antworten: ["Ja", "Neutral", "Nein"], position: ["Mitte", "Links", "Rechts"] }
        ];

        const parteien = {
            "CDU/CSU": [0, 1, 0, 1, 0, 1, -1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, -1, 0, 0, 1, 1, 0, 1, 1],
            "SPD": [1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1],
            "Grüne": [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1],
            "FDP": [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0],
            "AfD": [-1, 1, -1, 0, 0, 1, 1, -1, 1, 1, 0, -1, 1, -1, 0, 0, 0, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 1, -1, -1],
            "Die Linke": [1, -1, 1, 1, 1, -1, 1, 1, -1, 0, 1, -1, 1, 1, 1, -1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0],
        };

        const fragenContainer = document.getElementById('fragenContainer');
        let currentQuestionIndex = 0;

        function displayQuestion() {
            const frage = fragen[currentQuestionIndex];
            fragenContainer.innerHTML = `
                <div class="question">
                    <h2>Frage ${currentQuestionIndex + 1}: ${frage.text}</h2>
                    ${frage.antworten.map((antwort, index) => `
                        <input type="radio" name="antwort" value="${index}"> ${antwort}
                    `).join('<br>')}
                </div>
            `;
        }

        function calculateResults() {
            const results = {};
            for (const partei in parteien) {
                results[partei] = 0;
            }

            const selectedValue = document.querySelector('input[name="antwort"]:checked');
            if (selectedValue) {
                const value = parseInt(selectedValue.value);
                for (const partei in parteien) {
                    results[partei] += parteien[partei][currentQuestionIndex] * (value === 0 ? 1 : value === 1 ? 0 : -1);
                }
            }

            currentQuestionIndex++;

            if (currentQuestionIndex < fragen.length) {
                displayQuestion();
            } else {
                displayFinalResults(results);
            }
        }

        function displayFinalResults(results) {
            const resultContainer = document.getElementById('resultContainer');
            resultContainer.innerHTML = '<h2>Ergebnisse:</h2>';
            for (const partei in results) {
                resultContainer.innerHTML += `<p>${partei}: ${results[partei]}</p>`;
            }
        }

        displayQuestion();
    </script>
</body>
</html>
