function getQuestionsAmount(){
    const amount = document.getElementById('amount');
    return `amount=${amount.value}`  
}

function getCategory() {
    const category = document.getElementById('category');
    return valueToUrlText(category.options[category.selectedIndex].value, 'category');
}

function getDifficulty() {
    const difficulty = document.getElementById('difficulty')
    return valueToUrlText(difficulty.options[difficulty.selectedIndex].value, 'difficulty');
}

function getType() {
    const type = document.getElementById('type');
    return valueToUrlText(type.options[type.selectedIndex].value, 'type');
}

function valueToUrlText(value, urlText){
    if(value != '')
        return `&${urlText}=${value}`
    else
        return ''
}

function getSelectedOptions() {
    return [getQuestionsAmount(), getDifficulty(), getCategory(), getType()]
}

export { getSelectedOptions }