const questionArea = document.getElementById("question");
const topicArea = document.getElementById("topic");
const counterArea = document.getElementById("questionCounter");
const answerArea = document.getElementById("answer");
const resultArea = document.getElementById("result");
const answers = document.getElementById("answer");
const nextQuestion = document.getElementById("next");
const containerNext = document.getElementById("container");
let questions = [];
let index = 0;
let answered = false;
let score = 0;

fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(data => saveData(data.results))


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

function saveData(data) {
    questions = data;
    console.log(questions);
    showQuestion(index, questions);
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
    counterArea.innerHTML = `<p>Pregunta ${i}</p>`;
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

function printCorrect(){
    resultArea.innerHTML = `<p>Correct</p>`
    resultArea.style.color = "yellow"
}

function printIncorrect(){
    resultArea.innerHTML = `<p>Incorrect</p>`
    resultArea.style.color = "red";
}