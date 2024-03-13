const questions = [
    {
        question: "Que signifie l'abréviation 'POO' en programmation ?",
        answers: [
            { text: "Programmation Orientée Objet", correct: true },
            { text: "Programmation Orientée Opérateurs", correct: false },
            { text: "Principes Orientés Objet", correct: false },
            { text: "Programmation Organisée d'Objets", correct: false },
        ]
    },
    {
        question: "Lequel des éléments suivants n’est pas un concept POO en Java?",
        answers: [
            { text: "Héritage", correct: false },
            { text: "Encapsulation", correct: false },
            { text: "Compilation", correct: true },
            { text: "Polymorphisme", correct: false },
        ]
    },
    {
        question: "Quel est le composant utilisé pour la compilation, le débogage et l’exécution des programmes java ?",
        answers: [
            { text: "JDK", correct: true },
            { text: "JVM", correct: false },
            { text: "JRE", correct: false },
            { text: "JIT", correct: false },
        ]
    },
    {
        question: "Qu'est-ce que l'acronyme 'JVM' signifie dans le contexte de développement Java?",
        answers: [
            { text: "Java Verified Module", correct: false },
            { text: "Java Visual Model ", correct: false },
            { text: "Java Version Manager", correct: false },
            { text: "Java Virtual Machine", correct: true },
        ]
    },
    {
        question: "quel mot-clé est utilisé pour déclarer une variable de type caractère ?",
        answers: [
            { text: "int", correct: false },
            { text: "char", correct: true },
            { text: "float", correct: false },
            { text: "character", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answers");
const nextButton = document.getElementById("next");

let currentQstsIndex = 0;
let score = 0;

function startQuiz() {
    currentQstsIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQsts();
}

function showQsts() {


}
