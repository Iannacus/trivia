const answerArea = document.getElementById('answer');


function printAnswerArea(i, array) {
    const { type, correct_answer, incorrect_answers} = array[i];
    answerArea.innerHTML = '';
    if(type === 'multiple') {
        const answers = sortAnswers(correct_answer, incorrect_answers);
        let count = 0;
        answers.forEach(answer => {
            answerArea.innerHTML += `
            <div class='answer'>
                <div class='answer__text' id='answer${count}'>
                    <p>${answer}</p>
                </div>
                <div class='answer__absolute'></div>
            </div>
        `
        count++;
        })
    }else if(type === 'boolean'){
        answerArea.innerHTML += `
            <div class='answer'>
                <div class='answer__text' id='answer0'>
                    <p>True</p>
                </div>
                <div class='answer__absolute'></div>
            </div>
            <div class='answer'>
                <div class='answer__text' id='answer1'>
                    <p>False</p>
                </div>
                <div class='answer__absolute'></div>
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

function isBoolean(type){
    return type == 'boolean' ? true : false;
}

export { printAnswerArea, answerArea, isBoolean }