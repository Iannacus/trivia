import { startTrivia } from './play.js'; 
import { printQuestionArea, questionArea, questionTextArea } from './questions.js'
import { getSelectedOptions } from './selectOptions.js';
import { printSelectButton } from './printOptions.js';
import { printAnswerArea, isBoolean } from './answers.js'
import { verifyAnswer, resultArea, resetScore } from './verifyAnswers.js'
import { questions } from './play.js';
import { score } from './verifyAnswers.js'
import { showFinalScore, scoreArea } from './score.js';
import { start } from './api.js';
import { printCategory } from './questions.js'
const answers = document.getElementById("answer");
const nextQuestion = document.getElementById("next");
const containerNext = document.getElementById("container");
const hiddenArea = document.getElementById("hiddenly");
let answered = false;
let index = 0;
let playAgain;



const optionsAreaListener = hiddenArea.addEventListener('click', e => {
    if(e.target.classList.contains('btn')){
        const selectedOptions = getSelectedOptions()
        const [amount, dificulty, category, type] = selectedOptions;
        startTrivia(amount, dificulty, category, type);
        hiddenArea.style.display = 'none';
    }
});

const questionAreaListener = questionArea.addEventListener('click', e => {
    if(e.target.classList.contains('btnAgain')) {

        resultArea.style.display = 'block';
        resultArea.innerHTML = '';
        questionTextArea.innerHTML = '';
        hiddenArea.style.display = 'block';
        index = 0;
        resetScore();
        printCategory('A simple Trivia Game. Answer & get Fun!');
        start();
    }
});

const asnwersListener = answers.addEventListener("click", e => {
    if(!answered){
        const selectedAnswer = e.target.previousElementSibling.textContent.trim();
        answered = true;
        const bool = isBoolean(questions[index].type);
        verifyAnswer(selectedAnswer, index, e, bool);
        nextQuestion.style.display = 'block';
    }else
        alert('Debes ir a la siguiente pregunta');
});

const containerNextListener = containerNext.addEventListener('click', e => {
    if(e.target.classList.contains('next__absolute')){
        answered = false;
        resultArea.style.display = 'none';
        index ++;
        nextQuestion.style.display = 'none';
        if(index < questions.length){
            printQuestionArea(index, questions);
            printAnswerArea(index, questions);
        }else{
            playAgain = document.getElementById('startButton');
            showFinalScore(score);
        }
    }
});


export { questionAreaListener, hiddenArea, containerNextListener, optionsAreaListener, asnwersListener, index }