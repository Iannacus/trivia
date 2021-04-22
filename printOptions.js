function printSelectNumberOfQuestions(){
    return `
    <div class="options__single">
        <label for="number_Of_Questions">Number of Questions</label>
        <input type="number" name="number_Of_Questions" min="1" max="50" value="10" id="amount">
    </div>`
}

function printSelectDificulty(){
    return `
    <div class="options__single">
                        <label for="dificulty">Dificulty</label>
                        <select name="dificulty" id="difficulty">
                            <option value="">Any Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>`
}

function printSelectCategories(categories) {
    let options = "";
    categories.forEach(category => {
        options += `
            <option value="${category.id}">${category.name}</option>

        `
    });
    return `
    <div class="options__single" >
                        <label for="">Category</label>
                        <select name="" id="category">
                        ${options}
                        </select>
    </div>
    `
}

function printSelectType(){
    return `
    <div class="options__single">
                        <label for="">Select Type</label>
                        <select name="" id="type">
                            <option value="">Any Type</option>
                            <option value="multiple">Multiple Choise</option>
                            <option value="boolean">True / False</option>
                        </select>
                    </div>`
}

function printSelectButton() {
    return `
    <div>
        <button class="btn" id="start_button">Start</button>
    </div>
    `
}

function selectOptions(cat) {
    return printSelectNumberOfQuestions() + printSelectDificulty() + printSelectCategories(cat) + printSelectType() + printSelectButton();
}

export { selectOptions }