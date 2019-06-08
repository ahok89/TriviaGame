var timer = 60;

var intervalId;

function decrement() {
    number--;
    $("#timer").html("<h2>" number + "seconds left" </h2>");
    if (number === 0) {
        stop();
    }
}

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
}


var questions = ( {
    question: "Which Digidestined is revealed as the Eighth Child?",
    answers: ["Kairi", "Tai" , "T.K." , "Willis"]
    correctAnswer: "Kairi"
},{
    question: "Who does the Crest of Courage belong to?"
    answers: ["Sora", "Matt", "Tai", "T.K."]
    correctAnswer: "Tai"
},{
    question: "What is the name of Matt's brother?"
    answers: ["Joe", "T.K", "Tai", "Izzy"]
    correctAnswer: "T.K."
},{
    question: "Which Digidestined wears goggles?"
    answers: ["Matt", "Sora", "Izzy", "Tai"]
    correctAnswer: "Tai"
},{
    question: "Which Digidestined has blue hair?"
    answers: ["Izzy", "Joe", "Tai", "T.K."]
    correctAnswers: "Joe"
},{
    question: "Which of these Digimon is Mimi's partner?"
    answers: ["Botamon", "Agumon", "Tentamon", "Palmon"]
    correctAnswer: "Palmon"
},{
    question: "Who does the Crest of Hope belong to?"
    answers: ["Kairi", "T.K.", "Sora", "Matt"]
    correctAnswer:"T.K."
},{
   question: "What musical instrument is Matt sometimes seen playing in the first season?"
   answers: ["Piano", "Guitar", "Harmonica", "Saxophone"] 
   correctAnswers: "Harmonica"
},{
    question: "What is Tai's favorite sport?"
    answers: ["Baseball", "Basketball", "Soccer", "Tennis"]
    correctAnswers: "Soccer"
},{
    question: "What crest does Matt bear?"
    answers: ["Friendship", "Sincerity", "Light", "Reliability"]
    correctAnswers: "Friendship"
} 

$(".q0").text(questions.question);
$(".q0").text(questions.question);
$(".q1").text(questions.question);
$(".q1").text(questions.question);
$(".q2").text(questions.question);
$(".q2").text(questions.question);
$(".q2").text(questions.question);
$(".q3").text(questions.question);
$(".q3").text(questions.question);
$(".q4").text(questions.question);
$(".q4").text(questions.question);
$(".q5").text(questions.question);
$(".q5").text(questions.question);
$(".q6").text(questions.question);
$(".q6").text(questions.question);
$(".q7").text(questions.question);
$(".q7").text(questions.question);
$(".q8").text(questions.question);
$(".q8").text(questions.question);
$(".q9").text(questions.question);
$(".q9").text(questions.question);



