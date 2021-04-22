import { questions } from './play.js';
import { getQuestionDifficulty, printScore } from './score.js';
const resultArea = document.getElementById("result");
let score = 0;
let points = 0;

function verifyAnswer(ans, i) {
    if(ans === questions[i].correct_answer){
        printCorrect();
        points = getQuestionDifficulty(questions[i].difficulty);
        score += points;
    }
    else
        printIncorrect();
    resultArea.style.display = "block";
    printScore(score);
}

function printCorrect(){
    resultArea.innerHTML = `<p>Correct</p>`
    resultArea.style.color = "yellow"
}

function printIncorrect(){
    resultArea.innerHTML = `<p>Incorrect</p>`
    resultArea.style.color = "red";
}

export { verifyAnswer, resultArea, score };