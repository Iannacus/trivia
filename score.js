import { questionTextArea } from './questions.js'
import { answerArea } from './answers.js'
import { questions, playAgainButton } from './play.js'
const scoreArea = document.getElementById("score");


function showFinalScore(score) {
    answerArea.innerHTML = '';
    let totalPoints = getTotalPoints(questions);
    questionTextArea.innerHTML = `<p>Final Score: ${score} / ${totalPoints}</p>
                                ${playAgainButton()}`;
}

function printScore(score) {
    scoreArea.innerHTML = `<p>Score: ${score}</p>`;
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

export { getQuestionDifficulty, showFinalScore, printScore, scoreArea };