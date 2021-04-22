
const topicArea = document.getElementById("topic");
const counterArea = document.getElementById("questionCounter");
const questionArea = document.getElementById("question");

function printQuestionArea(i, array){
    const total = array.length;
    let { category, question } = array[i];
    printTopic(category);
    printQuestionNumber(i + 1, total);
    printQuestion(question);
}

function printTopic(category){
    topicArea.innerHTML = `<p>${category}</p>`;
}
function printQuestion(questionText){
    questionArea.innerHTML = `<p>${questionText}</p>`;
}

function printQuestionNumber(questionNumber, totalQuestions){
    counterArea.innerHTML = `<p>${questionNumber}/${totalQuestions}</p>`;
}

export { printQuestionArea, questionArea }