import { startTrivia } from './play.js'; 
import { printQuestionArea } from './questions.js'
import { getSelectedOptions } from './selectOptions.js';
import { printAnswerArea, isBoolean } from './answers.js'
import { verifyAnswer, resultArea } from './verifyAnswers.js'
import { questions } from './play.js';
import { score } from './verifyAnswers.js'
import { printScore, showFinalScore } from './score.js';
const answers = document.getElementById("answer");
const nextQuestion = document.getElementById("next");
const containerNext = document.getElementById("container");
const hiddenArea = document.getElementById("hiddenly");
let answered = false;
let index = 0;



const optionsAreaListener = hiddenArea.addEventListener('click', e => {
    if(e.target.classList.contains('btn')){
        const selectedOptions = getSelectedOptions()
        const [amount, dificulty, category, type] = selectedOptions;
        startTrivia(amount, dificulty, category, type);
        hiddenArea.style.display = 'none';
    }
});

const asnwersListener = answers.addEventListener("click", e => {
    if(!answered){
        const selectedAnswer = e.target.previousElementSibling.textContent.trim();
        answered = true;
        const bool = isBoolean(questions[index].type);
        console.log(bool)
        verifyAnswer(selectedAnswer, index, e, bool);
        nextQuestion.style.display = "block";
    }else
        alert("Debes ir a la siguiente pregunta");
});

const containerNextListener = containerNext.addEventListener("click", e => {
    if(e.target.classList.contains("next")){
        answered = false;
        resultArea.style.display = "none";
        index ++;
        if(index < questions.length){
            printQuestionArea(index, questions);
            printAnswerArea(index, questions);
        }else
            showFinalScore(score);
        nextQuestion.style.display = "none";
    }
});



export { hiddenArea, containerNextListener, optionsAreaListener, asnwersListener, index }