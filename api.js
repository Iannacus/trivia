import { categories } from './categories.js';
import { selectOptions } from './printOptions.js';
import{ questionAreaListener, hiddenArea, containerNextListener, optionsAreaListener, asnwersListener } from './listeners.js'
import { printCategory, printQuestionNumber } from './questions.js';

start();
listeners();

function listeners() {
    optionsAreaListener;
    asnwersListener;
    containerNextListener;
    questionAreaListener;
}

function start() {
    let cat = categories;
    printCategory('A simple Trivia Game. Answer & get Fun!');
    printQuestionNumber('🤘');
    hiddenArea.innerHTML = selectOptions(cat);
 }

 export { start };
