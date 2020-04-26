const timer = document.getElementById("timer");
const iQS = document.getElementById("intro-questions-score");
const ansContainer = document.getElementById("answer-container");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const answers = document.getElementById("answer-btns");
const answerstat = document.getElementById("answer-status");
const controls = document.getElementsByClassName(".controls");
const startbtn = document.getElementById("start-btn");
const nextbtn = document.getElementById("next-btn");
const scores = document.getElementById("score");

const input = document.getElementById("inputs");
const addBtn = document.getElementById("add-btn");

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
        choiceA: "header" ,
        choiceB: "meta" ,
        choiceC: "script" ,
        choiceD: "js" ,
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
var scoreCount = 0;
var timerInterval;   
const lastQuestion = quiz.length -1;
let runningQuestion = 0;

var nameScore = [{}];


//intro
startQuiz();
renderLastScore();
                    
function setTime(){
        timerInterval = setInterval(function() {
        seconds--;
        timer.innerHTML = seconds + " seconds left.";

        if(seconds <= 0) {
            clearInterval(timerInterval);
            alert("TIMES UP!");
        }
    }, 1000);
}

//start quiz button. When clicked, display question and answers. hide start button. start timer.
function startQuiz(){
    
    iQS.innerHTML = "Welcome to the quiz.<br> You will have 60 seconds to answer all 5 questions.<br> For each wrong answer, it will take away 10 seconds.<br> Press 'Start' To Begin.";
startbtn.addEventListener("click", function () {

    score.style.display = "none";
    startbtn.style.display = "none";
    ansContainer.style.display = "initial";
    setTime();
    renderQuestion();
    

});
};

//renders questions and answers
function renderQuestion(){
    let q = quiz[runningQuestion];

    iQS.innerHTML = "<p>" + q.question + "<p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

//checks answers and runs through questions
function checkAnswer(answer) {
    if (answer == quiz[runningQuestion].correct){
        //answer is correct
        scoreCount++;
        answerCorrect();
        console.log("Score is " + scoreCount);
    }else{
        //answer is wrong
        answerWrong();
        seconds = seconds - 10;
    }
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(timerInterval);
        scoreRender();

    }
}

// clicking the answers will initiate these functions.
function answerCorrect() {
    answerstat.style.color = "green";
    answerstat.innerHTML = "Correct !";
}

function answerWrong() {
    answerstat.style.color = "red";
    answerstat.innerHTML = "Incorrect !";
}

//renders scores
function scoreRender(){
    ansContainer.style.display = "none";
    timer.style.display = "none";
    score.style.display = "initial";
    input.style.display = "initial";
    addBtn.style.display = "initial";

    iQS.innerHTML = "Your score is " + scoreCount + ".";   
}

//input score into  score div
function addScoreToList(event){
    event.preventDefault();
    var name = input.value;
    var li = document.createElement("li");
    li.id = nameScore.length;
    li.innerHTML = name + " scored " + scoreCount;
    nameScore.push({ name: scoreCount });
    scores.append(li);
}

addBtn.addEventListener("click", addScoreToList);

addBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var store = nameScore;
    

    if (input === "") {
        displayMessage("error", "Please input something plz");
    }else{
        localStorage.setItem("store", nameScore);
    }
})

//Local Storage


function renderLastScore() {
    var store = localStorage.getItem("nameScore");
    
    if (store === null) {
      return;
    }
  
    nameScore.textContent = nameScore;
   
  }
  
 console.log(nameScore);