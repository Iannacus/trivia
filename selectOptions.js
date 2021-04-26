function getQuestionsAmount(){
    const amount = document.getElementById('amount');
    return `amount=${amount.value}`  
}

function getOption(option, category){
    return valueToUrlText(option.options[option.selectedIndex].value, category);
}

function valueToUrlText(value, urlText){
    return value != '' ? `&${urlText}=${value}` : '';
}

function getSelectedOptions() {
    const category = document.getElementById('category');
    const difficulty = document.getElementById('difficulty')
    const type = document.getElementById('type');
    return [getQuestionsAmount(), getOption(difficulty, 'difficulty'), getOption(category, 'category'), getOption(type, 'type')]
}

export { getSelectedOptions }