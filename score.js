import { questionArea } from './questions.js'
import { answerArea } from './answers.js'
import { questions } from './play.js'
const scoreArea = document.getElementById("score");

function showFinalScore(score) {
    answerArea.innerHTML = "";
    let totalPoints = getTotalPoints(questions);
    console.log(totalPoints)
    questionArea.innerHTML = `<p>Tu puntaje es: ${score} / ${totalPoints}</p>`;
}

function printScore(score) {
    scoreArea.innerHTML = `<p>Score: ${score}</p>`
}

function getQuestionDifficulty(difficulty) {
    return difficulty == 'easy' ? 1 : difficulty == 'medium' ? 2 : 3;
}

function getTotalPoints(array){
    let points = 0;
    
    array.forEach(question => {

        points += getQuestionDifficulty(question.difficulty);
    });
    return points;
}

export { getQuestionDifficulty, showFinalScore, printScore };