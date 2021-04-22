import { questions } from './play.js';
import { getQuestionDifficulty, printScore, scoreArea } from './score.js';
const resultArea = document.getElementById('result');
let score = 0;
let points = 0;

function verifyAnswer(ans, i, e, isBoolean) {
    const correctAnswer = questions[i].correct_answer;
    if(ans === correctAnswer){
        printCorrect();
        points = getQuestionDifficulty(questions[i].difficulty);
        paintAnswerArea(getAreaId(e), '#27DD97');
        score += points;
    }
    else{
        printIncorrect();
        paintAnswerArea(getAreaId(e), '#DD2730'); //red
        paintCorrectAnswerArea(correctAnswer, isBoolean);        
    }
    resultArea.style.display = "block";
    printScore(score);
}

function printCorrect(){
    resultArea.innerHTML = `<p>Correct</p>`
    resultArea.style.color = '#27DD97'
}

function paintAnswerArea(id, color){
    const answer = document.getElementById(`${id}`);
    answer.parentElement.style.background = `${color}`;
}

function paintCorrectAnswerArea(correct, boolean) {
    let ids = [];
    !boolean ? ids = ['answer0', 'answer1', 'answer2', 'answer3'] : ids = ['answer0', 'answer1'];
    ids.forEach(id => {
        const answer = document.getElementById(id).textContent.trim();
        if(correct === answer) {
            paintAnswerArea(id, '#27DD97');
        }
    });
}

function getAreaId(event, boolean){
    return event.target.previousElementSibling.getAttribute("id")   
} 

function printIncorrect(){
    resultArea.innerHTML = `<p>Incorrect</p>`
    resultArea.style.color = "#DD2730";
}

function resetScore() {
    score = 0;
    scoreArea.innerHTML = '';
}

export { verifyAnswer, resultArea, score, resetScore };