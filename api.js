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
    printCategory('A simple Trivia Game. Answer & get Fun!');
    printQuestionNumber('🤘');
    hiddenArea.innerHTML = selectOptions(categories);
 }

 export { start };
