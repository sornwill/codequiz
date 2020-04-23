var timer = document.querySelector(".timer");
var questions = document.querySelector("intro-container");
var answers = document.querySelector("answer-btns");
var controls = document.querySelector(".controls");
var startbtn = document.querySelector("start-btn");
var nextbtn = document.querySelector("next-btn");

var quiz = 
[
    {
        question: "1. What ?" ,
        answer: ["A. ", "B. ", "C ", "D "]
    },

    {
        question: "1. What ?" ,
        answer: ["A. ", "B. ", "C ", "D "]
    },

    {
        question: "1. What ?" ,
        answer: ["A. ", "B. ", "C ", "D "]
    },

    {
        question: "1. What ?" ,
        answer: ["A. ", "B. ", "C ", "D "]
    },

    {
        question: "1. What ?" ,
        answer: ["A. ", "B. ", "C ", "D "]
    },
]

var seconds = 60;
var score = 0;

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

function startButton(){
    
}