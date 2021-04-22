import { cat } from './categories.js';
import { selectOptions } from './printOptions.js';
import { startTrivia, showQuestion, questions } from './play.js';
import { getSelectedOptions } from './selectOptions.js';
const questionArea = document.getElementById("question");
const answerArea = document.getElementById("answer");
const resultArea = document.getElementById("result");
const answers = document.getElementById("answer");
const nextQuestion = document.getElementById("next");
const containerNext = document.getElementById("container");
const hiddenArea = document.getElementById("hiddenly");
let index = 0;
let answered = false;
let score = 0;

 init();

 function init() {
     hiddenArea.innerHTML = selectOptions(cat);
 }

hiddenArea.addEventListener('click', e => {
    if(e.target.classList.contains('btn')){
        const selectedOptions = getSelectedOptions()
        const [amount, dificulty, category, type] = selectedOptions;
        startTrivia(amount, dificulty, category, type);
        hiddenArea.style.display = 'none';
    }
});

answers.addEventListener("click", e => {
    if(!answered){
        answered = true;
        let selectedAnswer = "";
        if(e.target.classList.contains("answer"))
            selectedAnswer = e.target.firstElementChild.textContent.trim();
        else
            selectedAnswer = e.target.textContent;
        verifyAnswer(selectedAnswer, index);
        nextQuestion.style.display = "block";
    }else
        alert("Debes ir a la siguiente pregunta");
});

containerNext.addEventListener("click", e => {
    console.log(e.target.classList)
    if(e.target.classList.contains("next")){
        answered = false;
        resultArea.style.display = "none";
        index ++;
        if(index < questions.length)
            showQuestion(index, questions);
        else
            showScore();
        nextQuestion.style.display = "none";
    }
})

function showScore() {
    answerArea.innerHTML = "";
    questionArea.innerHTML = `<p>Tu puntaje es: ${score}/${questions.length}</p>`
}

function verifyAnswer(ans, i) {
    if(ans === questions[i].correct_answer){
        printCorrect();
        score ++;
    }
    else
        printIncorrect();
    resultArea.style.display = "block";
}

function printCorrect(){
    resultArea.innerHTML = `<p>Correct</p>`
    resultArea.style.color = "yellow"
}

function printIncorrect(){
    resultArea.innerHTML = `<p>Incorrect</p>`
    resultArea.style.color = "red";
}

export { index };