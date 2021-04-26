import { printQuestionArea } from './questions.js'
import { printAnswerArea } from './answers.js'
import { index } from './listeners.js';
let questions = [];


function startTrivia(amount, dificulty, category, type) {
    const apiUrl = generateLink(amount, dificulty, category, type);
    apiRequest(apiUrl, printData);
}

function generateLink(amount, difficulty, category, type){
    return `https://opentdb.com/api.php?${amount}${category}${difficulty}${type}`
}

function apiRequest(link, funct){
    fetch(link)
      .then((response) => response.json())
      .then((data) => funct(data.results))
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




export { startTrivia, playAgainButton, apiRequest, questions, }