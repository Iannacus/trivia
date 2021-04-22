const answerArea = document.getElementById("answer");


function printAnswerArea(i, array) {
    const { type, correct_answer, incorrect_answers} = array[i];
    answerArea.innerHTML = "";
    if(type === "multiple") {
        const answers = sortAnswers(correct_answer, incorrect_answers);
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

function sortAnswers(correct, incorrect) {
    let answers = incorrect;
    answers.push(correct);
    answers = answers.sort();
    return answers
}

export { printAnswerArea, answerArea }