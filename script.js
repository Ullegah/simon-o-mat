const questions = [
    {
        question: "Sollte die Videoüberwachung an öffentlichen Plätzen ausgeweitet werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

    
    {
        question: "Soll das Wahlalter für Bundestagswahlen auf 16 Jahre gesenkt werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

 {
        question: "Soll der Zugang zu privatem Waffenbesitz in Deutschland erleichtert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Sollte der Bund den Kommunen mehr finanzielle Mittel zur Verfügung stellen, um lokale Projekte besser umsetzen zu können?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll die Polizei in Deutschland mehr Befugnisse zur Überwachung von Kommunikation erhalten?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll der Schutz von Whistleblowern gesetzlich verbessert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll das Streikrecht in systemrelevanten Bereichen wie dem Gesundheitswesen eingeschränkt werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

{
        question: "Soll die Nutzung von Cannabis vollständig legalisiert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll es verpflichtende Zivildienst- oder Wehrdienstprogramme für junge Erwachsene geben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll die Parteienfinanzierung in Deutschland reformiert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll Deutschland seine Verteidigungsausgaben auf das NATO-Ziel von 2 % des BIP anheben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll die Europäische Union weitere Staaten wie die Ukraine oder den Westbalkan aufnehmen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

     {
        question: "Soll Deutschland stärker wirtschaftliche Abhängigkeiten von China und anderen Nicht-Demokratien reduzieren?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll Deutschland Waffenexporte in Krisengebiete weiterhin zulassen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll die Bundeswehr stärker in internationale Militäreinsätze eingebunden werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll Deutschland seine Entwicklungshilfezahlungen an wirtschaftliche Reformen in den Empfängerländern koppeln?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll die EU eine gemeinsame Armee aufbauen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

{
        question: "Sollten Steuern für hohe Einkommen erhöht werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll Deutschland Asylverfahren verstärkt in Drittstaaten auslagern?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll Deutschland aus der NATO austreten?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll der Export deutscher Rüstungsgüter komplett verboten werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll die Zusammenarbeit mit autoritären Staaten zur Sicherung wirtschaftlicher Interessen reduziert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

 {
        question: "Soll die EU eine einheitliche Außenpolitik mit Vetorecht für alle Mitgliedsstaaten einführen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll der Spitzensteuersatz für hohe Einkommen angehoben werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll es eine verpflichtende Vermögenssteuer für sehr hohe Privatvermögen geben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll der Mindestlohn in Deutschland weiter erhöht werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll Deutschland auf ein rein kapitalgedecktes Rentensystem umsteigen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

{
        question: "Soll der Staat Unternehmen stärker bei der Digitalisierung unterstützen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll die Schuldenbremse dauerhaft ausgesetzt werden, um mehr Investitionen zu ermöglichen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll das Arbeitslosengeld II (Bürgergeld) durch ein anreizorientiertes System mit mehr Sanktionen ersetzt werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll Deutschland eine Finanztransaktionssteuer einführen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll der Staat stärker in die Wohnungswirtschaft eingreifen, um bezahlbaren Wohnraum zu sichern?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

 {
        question: "Soll Deutschland ein bedingungsloses Grundeinkommen einführen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll die Gewerbesteuer für Unternehmen gesenkt werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll der Staat stärker in Zukunftstechnologien wie Künstliche Intelligenz investieren?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll das Renteneintrittsalter an die steigende Lebenserwartung angepasst werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll das deutsche Gesundheitssystem stärker auf private Anbieter setzen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

{
        question: "Soll es eine bundesweite Deckelung der Mietpreise in Großstädten geben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll das Bürgergeld durch ein anreizorientiertes System mit mehr Sanktionen ersetzt werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll der Staat Familien mit Kindern stärker finanziell entlasten?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll das Bildungssystem stärker vereinheitlicht werden, indem ein bundesweites Zentralabitur eingeführt wird?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll es ein staatlich finanziertes kostenloses Mittagessen für alle Schüler geben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

 {
        question: "Soll das Medizinstudium stärker auf praktische Erfahrung ausgerichtet werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll die Pflegeversicherung komplett steuerfinanziert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll Deutschland ein generelles Verbot von Leiharbeit im Gesundheitswesen einführen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll es mehr finanzielle Anreize für Lehrer in strukturschwachen Regionen geben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll der Rechtsanspruch auf einen Kitaplatz ab Geburt gelten?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

{
        question: "Soll Deutschland die Zahl der aufgenommenen Flüchtlinge begrenzen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll der Familiennachzug für Geflüchtete erleichtert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll es ein Punktesystem nach kanadischem Vorbild für Fachkräfte-Einwanderung geben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll der Zugang zur deutschen Staatsbürgerschaft erleichtert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll die Abschiebepraxis für abgelehnte Asylbewerber verschärft werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

     {
        question: "Soll die Integrationsförderung (z. B. Sprachkurse) vom Staat stärker finanziert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll der Staat mehr Abschiebungen nach Afghanistan und Syrien durchführen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll das Recht auf Asyl in Deutschland abgeschafft und durch ein Kontingentsystem ersetzt werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll Deutschland mehr legale Einwanderungsmöglichkeiten für Arbeitskräfte schaffen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll es eine verpflichtende Integrationsprüfung für Einwanderer geben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

{
        question: "Soll die Sozialhilfe für Migranten in den ersten fünf Jahren nach Einreise eingeschränkt werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll Deutschland eine Bezahlkarte für Asylbewerber einführen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll der Ausbau erneuerbarer Energien staatlich stärker gefördert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll es ein generelles Tempolimit auf deutschen Autobahnen geben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll der Kohleausstieg auf 2030 vorgezogen werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

 {
        question: "Soll der Staat stärker in klimafreundliche Verkehrskonzepte wie den ÖPNV investieren?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll die CO₂-Steuer weiter erhöht werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Soll Deutschland mehr in die Sanierung und den Ausbau der Straßen- und Schieneninfrastruktur investieren?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll der Ausbau der Windkraft an Land erleichtert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll die Förderung von E-Autos eingestellt und stattdessen Wasserstofftechnologie stärker unterstützt werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

{
        question: "Soll Deutschland mehr in Hochwasserschutz und Klimaanpassung investieren?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll der Staat den Verkauf von neuen Verbrennerautos bereits vor 2035 verbieten?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
 {
        question: "Sollten Steuern für hohe Einkommen erhöht werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Soll Deutschland den Ausbau von Atomkraft als Übergangslösung wieder in Betracht ziehen?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Soll es eine staatliche Abwrackprämie für alte Heizungen geben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    // Füge hier die weiteren 3 Fragen mit der neuen Antwortoption hinzu
];

// Funktion zum Anzeigen der Fragen
function displayQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = ''; // Leere den Container
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;
        q.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.onclick = () => selectAnswer(index, answer.points, button);
            questionDiv.appendChild(button);
        });
        container.appendChild(questionDiv);
    });
}

let userAnswers = Array(questions.length).fill(null);

function selectAnswer(questionIndex, points, selectedButton) {
    // Setze den vorherigen Button zurück
    const buttons = document.querySelectorAll(`#questions-container div:nth-child(${questionIndex + 1}) button`);
    buttons.forEach(button => {
        button.classList.remove('selected');
        button.classList.add('not-selected'); // Hinzufügen der Klasse für nicht ausgewählte Buttons
    });

    // Setze die aktuelle Auswahl
    userAnswers[questionIndex] = points;
    selectedButton.classList.add('selected');
}

document.getElementById('evaluate-button').onclick = () => evaluateResults();

function evaluateResults() {
    const results = { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 };

    userAnswers.forEach(answer => {
        if (answer) { // Nur Punkte addieren, wenn eine Antwort gewählt wurde
            for (const party in answer) {
                results[party] += answer[party];
            }
        }
    });

    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '<h2>Ergebnisse</h2>';
    for (const party in results) {
        resultsContainer.innerHTML += `<p>${party}: ${results[party]} Punkte</p>`;
    }
}

// Initialisiere das Fragen-Display
displayQuestions();
