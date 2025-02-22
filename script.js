

const questions = [
    {
        question: "Sollte die Videoüberwachung an öffentlichen Plätzen ausgeweitet werden?",
        answers: [
            { text: "Ja", points: { CDU: 1, SPD: 1, Grüne: 0, FDP: 0, AfD: 1, Linke: -1 } },
            { text: "Nein", points: { CDU: -1, SPD: -1, Grüne: -1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 1, FDP: 1, AfD: 0, Linke: 0 } }
        ]
    },
 
    
    {
        question: "Soll das Wahlalter für Bundestagswahlen auf 16 Jahre gesenkt werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: 1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: -1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

 {
        question: "Soll der Zugang zu privatem Waffenbesitz in Deutschland erleichtert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: -1, Grüne: 1, FDP: 0, AfD: 1, Linke: -1 } },
            { text: "Nein", points: { CDU: 1, SPD: 1, Grüne: -1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 1, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Sollte der Bund den Kommunen mehr finanzielle Mittel zur Verfügung stellen, um lokale Projekte besser umsetzen zu können?",
        answers: [
            { text: "Ja", points: { CDU: 1, SPD: 1, Grüne: 1, FDP: 1, AfD: 1, Linke: 1 } },
            { text: "Nein", points: { CDU: -1, SPD: -1, Grüne: -1, FDP: -1, AfD: -1, Linke: -1 } },
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
        question: "Soll das öffentlich-rechtliche Rundfunksystem in seiner aktuellen Form bestehen bleiben?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

{
        question: "Soll die direkte Demokratie in Deutschland durch Volksentscheide gestärkt werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },

 {
        question: "Soll der Mitarbeiterstab des Staates verkleinert werden ?",
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
        question: "Soll die Bürokratie abgebaut werden?",
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
        question: "Soll Deutschland wirtschaftliche und sicherheitspolitische Kooperationen mit Staaten beenden, die regelmäßig gegen Menschenrechte oder das Völkerrecht verstoßen?",
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
        question: "Soll der Staat mehr Befugnisse erhalten, um gegen Extremismus und Terrorismus vorzugehen?",
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
        question: "Sollen auch Beamte in die Rentenversicherung einzahlen?",
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
        question: "Soll die Regierung mehr in Programme investieren, die Obdachlosigkeit verhindern und Betroffenen helfen?",
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
        question: "Sollen mehr Mittel für die Modernisierung von Schulen bereitgestellt werden?",
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
        question: "Soll die Pflegeversicherung reformiert werden?",
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
        question: "Soll die Integrationsförderung vom Staat stärker finanziert werden?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
{
        question: "Sollen Asylanten abgeschoben werden wenn der Fluchtgrund erlischt?",
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
        question: "Sollen Kinder von Migranten bei Geburt in Deutschland automatisch einen deutschen Pass erhalten?",
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
        question: "Sollen PV Anlagen und Wärmepumpen Pflicht für Neubauten sein?",
        answers: [
            { text: "Ja", points: { CDU: -1, SPD: 1, Grüne: 1, FDP: -1, AfD: -1, Linke: 1 } },
            { text: "Nein", points: { CDU: 1, SPD: -1, Grüne: -1, FDP: 1, AfD: 1, Linke: -1 } },
            { text: "Enthaltung", points: { CDU: 0, SPD: 0, Grüne: 0, FDP: 0, AfD: 0, Linke: 0 } }
        ]
    },
    
    {
        question: "Sollen E-Autos weiter gefördert werden?",
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
  
];

const ueberschrift = [
    { title: "Innenpolitik & Gesellschaft", questions: [] },
    { title: "Außen- & Sicherheitspolitik", questions: [] },
    { title: "Wirtschaft & Finanzen", questions: [] },
    { title: "Soziales, Bildung & Gesundheit", questions: [] },
    { title: "Migration & Integration", questions: [] },
    { title: "Umwelt, Infrastruktur & Klima", questions: [] }
];

// Fragen in 12er Gruppen aufteilen
questions.forEach((q, index) => {
    q.index = index;
    if (index <= 11){
        ueberschrift[0].questions.push(q)
    }
      if (index > 11 && index <= 23){
        ueberschrift[1].questions.push(q)
    }

    if (index > 23 && index <= 35){
        ueberschrift[2].questions.push(q)
    }
    if (index > 35 && index <= 47){
        ueberschrift[3].questions.push(q)
    }
    if (index > 47 && index <= 59){
        ueberschrift[4].questions.push(q)
    }
    if (index > 59 && index <= 71){
        ueberschrift[5].questions.push(q)
    }
    
});

function displayUeberschrift() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    ueberschrift.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.innerHTML = `<h2>${group.title}</h2>`;
        
        group.questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;
            
            q.answers.forEach(answer => {
                const button = document.createElement('button');
                button.textContent = answer.text;
                button.question =q.index
                button.onclick = () => selectAnswer(q.index, answer.points, button);
                questionDiv.appendChild(button);
            });
            
            groupDiv.appendChild(questionDiv);
        });
        
        container.appendChild(groupDiv);
    });
}
displayUeberschrift();




/*    
// Funktion zum Anzeigen der Fragen
//function displayQuestions() {
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
*/
let userAnswers = Array(questions.length).fill(null);

function selectAnswer(questionIndex, points, selectedButton) {
    // Setze den vorherigen Button zurück
    const buttons = selectedButton.parentNode.querySelectorAll("button");
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

    // Ergebnisse als Diagramm anzeigen
    updateChart(results);
}

let resultsChart;

function updateChart(results) {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    
    if (resultsChart) {
        resultsChart.destroy(); // Falls ein Diagramm existiert, lösche es zuerst
    }

    resultsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['CDU', 'SPD', 'Grüne', 'FDP', 'AfD', 'Linke'],
            datasets: [{
                label: 'Punkte',
                data: [
                    results.CDU, 
                    results.SPD, 
                    results.Grüne, 
                    results.FDP, 
                    results.AfD, 
                    results.Linke
                ],
                backgroundColor: ['black', 'red', 'green', 'yellow', 'blue', 'pink'],
                borderColor: ['black', 'darkred', 'darkgreen', 'gold', 'darkblue', 'deeppink'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialisiere das Fragen-Display

displayUeberschrift();
