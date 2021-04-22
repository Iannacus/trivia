import { printQuestionArea } from './questions.js'
import { questionArea } from './questions.js'
import { printAnswerArea } from './answers.js'
import { index } from './listeners.js';
let questions = [];


function startTrivia(amount, dificulty, category, type) {
    const apiUrl = generateLink(amount, dificulty, category, type);
    apiRequest(apiUrl);
}

function generateLink(a, d, c, t){
    return `https://opentdb.com/api.php?${a}${c}${d}${t}`
}

function apiRequest(link){
    fetch(link)
      .then(response => response.json())
      .then(data => printData(data.results))
}

function printData(data) {
    questions = data;
    printQuestionArea(index, questions);
    printAnswerArea(index, questions);
}

function playAgainButton(){
    return `
    <div>
        <button class="btn btnAgain" id="start_button">Play Again</button>
    </div>
    `
}




export { startTrivia, playAgainButton, questions, }