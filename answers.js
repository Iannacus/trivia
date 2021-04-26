const answerArea = document.getElementById('answer');


function printAnswerArea(i, array) {
    const { type, correct_answer, incorrect_answers} = array[i];
    answerArea.innerHTML = '';
    let answers = [];
    let count = 0;
    isBoolean(type) ? answers = ['True', 'False'] : answers = sortAnswers(correct_answer, incorrect_answers);
    createAnswerHTML(answers, count);
}

function createAnswerHTML(answerArray, id) {
    answerArray.forEach(answer => {
        answerArea.innerHTML += `
        <div class='answer'>
            <div class='answer__text' id='answer${id}'>
                <p>${answer}</p>
            </div>
            <div class='answer__absolute'></div>
        </div>
    `
    id++;
    });
}

function sortAnswers(correct, incorrect) {
    let answers = incorrect;
    answers.push(correct);
    answers = answers.sort();
    return answers
}

function isBoolean(type){
    return type == 'boolean' ? true : false;
}

export { printAnswerArea, answerArea, isBoolean }