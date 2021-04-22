
const categoryArea = document.getElementById("questionCategory");
const counterArea = document.getElementById("questionCounter");
const questionArea = document.getElementById("questionArea");
const questionTextArea = document.getElementById("question");

function printQuestionArea(i, array){
    const total = array.length;
    let { category, question } = array[i];
    printCategory(`<p>${category}</p>`);
    printQuestionNumber(`<p>${i+1}/${total}</p>`);
    printQuestion(question);
}

function printCategory(message){
    categoryArea.innerHTML = message;
}
function printQuestion(questionText){
    questionTextArea.innerHTML = `<p>${questionText}</p>`;
}

function printQuestionNumber(message){
    counterArea.innerHTML = message;
}

export { printQuestionArea, printCategory, printQuestionNumber, questionArea, questionTextArea }