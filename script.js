var correctAnswers = [0, 0, 0];
var currentQuestionAnswered = false;

var nextQuestionButton = document.querySelector("#next-question");
var previousQuestionButton = document.querySelector("#prev-question");
var restartButton = document.querySelector("#restart");

function displaynextQuestion() {
    document.querySelector(".error").classList.add("inactive");
    var activeQuestion = document.querySelector('.show-active');
    var radioButtons = activeQuestion.getElementsByClassName('radio-buttons');
    for(var btn of radioButtons) {
        if(btn.checked) {
            currentQuestionAnswered = true;
            if(btn.classList.contains("correct")) {
                if(activeQuestion.id === "question-1") {
                    correctAnswers[0] = 1;
                }
                else if(activeQuestion.id === "question-2") {
                    correctAnswers[1] = 1;
                }
                else {
                    correctAnswers[2] = 1;
                }
            }
        }
    }
    if(currentQuestionAnswered) {
        if(activeQuestion.id === "question-1") {
            activeQuestion.classList.remove("show-active");
            document.getElementById("question-2").classList.add("show-active");
            document.querySelector(".question-number-text").innerText = "Question 2 of 3:";
            document.querySelector(".question-text").innerText = "If Shopify is so good, why are Shopify developers necessary?";
            previousQuestionButton.classList.remove("inactive");
        }
        else if(activeQuestion.id === "question-2") {
            activeQuestion.classList.remove("show-active");
            document.getElementById("question-3").classList.add("show-active");
            document.querySelector(".question-number-text").innerText = "Question 3 of 3:";
            document.querySelector(".question-text").innerText = "Which of the following is true about Shopify developers?";
        }
        else {
            activeQuestion.classList.remove("show-active");
            document.querySelector(".question-number-text").classList.add("inactive");
            document.querySelector(".question-text").classList.add("inactive");
            if(correctAnswers[0] === 1) {
                document.getElementById("final-message-1").innerText = "Question 1: correct";
            }
            else {
                document.getElementById("final-message-1").innerText = "Question 1: incorrect";
            }
            if(correctAnswers[1] === 1) {
                document.getElementById("final-message-2").innerText = "Question 2: correct";
            }
            else {
                document.getElementById("final-message-2").innerText = "Question 2: incorrect";
            }
            if(correctAnswers[2] === 1) {
                document.getElementById("final-message-3").innerText = "Question 3: correct";
            }
            else {
                document.getElementById("final-message-3").innerText = "Question 3: incorrect";
            }
            var numCorrectAnswers = correctAnswers[0] + correctAnswers[1] + correctAnswers[2];
            document.getElementById("final-message-4").innerText = `You answered ${numCorrectAnswers} questions correctly out of 3`;
            previousQuestionButton.classList.add("inactive");
            nextQuestionButton.classList.add("inactive");
            restartButton.classList.remove("inactive");
            document.getElementById("final-message-4").classList.remove("inactive");
            document.getElementById("final-message-3").classList.remove("inactive");
            document.getElementById("final-message-2").classList.remove("inactive");
            document.getElementById("final-message-1").classList.remove("inactive");
        }
    }
    else {
        document.querySelector(".error").classList.remove("inactive");
    }
    currentQuestionAnswered = false;
}

function displaypreviousQuestion() {
    document.querySelector(".error").classList.add("inactive");
    var activeQuestion = document.querySelector('.show-active');
    if(activeQuestion.id === "question-2") {
        activeQuestion.classList.remove("show-active");
        document.getElementById("question-1").classList.add("show-active");
        document.querySelector(".question-number-text").innerText = "Question 1 of 3:";
        document.querySelector(".question-text").innerText = "Which of the following is not a real eCommerce platform?";
        previousQuestionButton.classList.add("inactive");
    }
    else {
        activeQuestion.classList.remove("show-active");
        document.getElementById("question-2").classList.add("show-active");
        document.querySelector(".question-number-text").innerText = "Question 2 of 3:";
        document.querySelector(".question-text").innerText = "If Shopify is so good, why are Shopify developers necessary?";
    }
    currentQuestionAnswered = false;
}

function restartQuestions() {
    correctAnswers = [0, 0, 0];
    currentQuestionAnswered = false;
    document.querySelector("#question-1").classList.add("show-active");
    document.getElementById("final-message-4").classList.add("inactive");
    document.getElementById("final-message-3").classList.add("inactive");
    document.getElementById("final-message-2").classList.add("inactive");
    document.getElementById("final-message-1").classList.add("inactive");
    restartButton.classList.add("inactive");
    document.querySelector(".question-number-text").classList.remove("inactive");
    document.querySelector(".question-text").classList.remove("inactive");
    document.querySelector(".question-number-text").innerText = "Question 1 of 3:";
    document.querySelector(".question-text").innerText = "Which of the following is not a real eCommerce platform?";
    nextQuestionButton.classList.remove("inactive");
}

nextQuestionButton.addEventListener("click", function() {
    displaynextQuestion();
})
previousQuestionButton.addEventListener("click", function() {
    displaypreviousQuestion();
})
restartButton.addEventListener("click", function() {
    restartQuestions();
})
