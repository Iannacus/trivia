import { selectOptions } from './printOptions.js';
import { hiddenArea } from './listeners.js';

let categories = [{'id': '',  'name': 'Any Category' }];

function getCategories() {
    fetch('https://opentdb.com/api_category.php', {
    method : 'GET'})
      .then((response) => response.json())
      .then((data) => printCategories(data.trivia_categories));
}


function printCategories(info) {
    categories = [...categories, ...info];
    hiddenArea.innerHTML = selectOptions(categories);
    
}

export { getCategories };

