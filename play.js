let questions = [];
import { index } from './api.js';
const topicArea = document.getElementById("topic");
const counterArea = document.getElementById("questionCounter");
const questionArea = document.getElementById("question");
const answerArea = document.getElementById("answer");
function startTrivia(amount, dificulty, category, type) {
    const apiUrl = generateLink(amount, dificulty, category, type)
    apiRequest(apiUrl);
}

function generateLink(a, d, c, t){
    return `https://opentdb.com/api.php?${a}${c}${d}${t}`
}

function apiRequest(link){
    fetch(link)
      .then(response => response.json())
      .then(data => saveData(data.results))
}

function saveData(data) {
    questions = data;
    console.log(questions);
    showQuestion(index, questions);
}

function showQuestion(index, array){
    
    let {category, correct_answer, incorrect_answers, question, type } = array[index];
    printTopic(category);
    printQuestionNumber(index+1);
    printQuestion(question);
    printAnswers(type, correct_answer, incorrect_answers);
}

function printTopic(c){
    topicArea.innerHTML = `<p>${c}</p>`;
}
function printQuestion(q){
    questionArea.innerHTML = `<p>${q}</p>`;
}

function printQuestionNumber(i){
    counterArea.innerHTML = `<p>Question ${i}</p>`;
}

function printAnswers(type, correct, incorrect) {
    answerArea.innerHTML = "";
    if(type === "multiple") {
        const answers = sortAnswers(correct, incorrect);
        answers.forEach(answer => {
            answerArea.innerHTML += `
            <div class="answer">
                <div class="answer__text">
                    <p>${answer}</p>
                </div>
            </div>
        `
        })
    }else if(type === "boolean"){
        answerArea.innerHTML += `
            <div class="answer">
                <div class="answer__text">
                    <p>True</p>
                </div>
            </div>
            <div class="answer">
                <div class="answer__text">
                    <p>False</p>
                </div>
            </div>
        `
    }
}

function sortAnswers(correctA, incorrectA) {
    let answers = incorrectA;
    answers.push(correctA);
    answers = answers.sort();
    return answers
}

export { startTrivia, showQuestion, questions, }