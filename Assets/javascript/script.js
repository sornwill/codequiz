const timer = document.getElementsByClassName(".timer");
const questions = document.getElementById("intro-container");
const ansContainer = document.getElementById("answer-container");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const answers = document.getElementById("answer-btns");
const controls = document.getElementsByClassName(".controls");
const startbtn = document.getElementById("start-btn");
const nextbtn = document.getElementById("next-btn");

var quiz = 
[
    {
        question: "1. What does HTML stand for?" ,
        choiceA: "Hyper Tune Markup Language" ,
        choiceB: "Hyper Text Markup Language" ,
        choiceC: "Hyperbolic Time Machine Learner" ,
        choiceD: "Hippo Tuna Monkey Lemur",
        correct: "B"
    },

    {
        question: "2. What does CSS stand for?" ,
        choiceA: "Communication Source Sheet" ,
        choiceB: "Constructional Style Source" ,
        choiceC: "Colliding Style Sheet" ,
        choiceD: "Cascading Style Sheets",
        correct: "D"
    },

    {
        question: "3. For week 5 of class, what are we learning?" ,
        choiceA: "C#" ,
        choiceB: "jQuery" ,
        choiceC: "MS Paint" ,
        choiceD: "React.js" ,
        correct: "B"
    },

    {
        question: "4. Inside which HTML element do we put the Javascript" ,
        choiceA: "<header>" ,
        choiceB: "<meta>" ,
        choiceC: "<script>" ,
        choiceD: "<js>" ,
        correct: "C"
    },

    {
        question: "5. What are the three things that make up a website?" ,
        choiceA: "HTML, C#, jQuery" ,
        choiceB: "MS Paint, React.js, Content" ,
        choiceC: "Python, C++, Java" ,
        choiceD: "HTML, CSS, Javascript" ,
        correct: "D"
    },
]

var seconds = 60;
var score = 0;

document.getElementById("intro-questions").innerHTML = "Welcome to the quiz.<br> You will have 60 seconds to answer all 5 questions.<br> For each wrong answer, it will take away 10 seconds.<br> Press 'Start' To Begin.";
                    
function setTime(){
    var timerInterval = setInterval(function() {
        seconds--;
        timer.textContent = seconds + " seconds left.";

        if(seconds === 0) {
            clearInterval(timerInterval);
            alert("TIMES UP!");
        }
    }, 1000);
}

//start quiz button. When clicked, display question and answers. hide start button. start timer.
startbtn.addEventListener("click", function () {
    
    startbtn.style.display = "none";
    ansContainer.style.display = "initial";
    setTime();
    renderQuestion();
    
});

const lastQuestion = quiz.length -1;
let runningQuestion = 0;

function renderQuestion(){
    let q = quiz[runningQuestion];

    document.getElementById("intro-questions").innerHTML = "<p>" + q.question + "<p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

//check answer
function checkAnswer(answer) {
    if (answer == quiz[runningQuestion].correct){
        //answer is correct
        score++;
        answerCorrect();
    }else{
        //answer is wrong
        seconds - 10;
        answerWrong();
    }
}
// function displayQuiz(){
//     for (let i = 0; i < quiz.length; i++){
//         document.getElementById("intro-questions").textContent = quiz[i].question;
//         document.getElementById("A").textContent = quiz[i].choiceA;
//         document.getElementById("B").textContent = quiz[i].choiceB;
//         document.getElementById("C").textContent = quiz[i].choiceC;
//         document.getElementById("D").textContent = quiz[i].choiceD;
//     }
// }

// clicking the answers will initiate these functions.
function answerCorrect() {
    document.getElementById("answer-status").style.color = "green";
    document.getElementById("answer-status").innerHTML = "Correct !";
}

function answerWrong() {
    document.getElementById("answer-status").style.color = "red";
    document.getElementById("answer-status").innerHTML = "Incorrect !";
}