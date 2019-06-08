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

var questions = {
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

$("sub-wrapper").prepend("<h2> Time Remaining: <span id='timer'>60</span Seconds<s/h2>");

