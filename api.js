import{ questionAreaListener, hiddenArea, containerNextListener, optionsAreaListener, asnwersListener } from './listeners.js'
import { printCategory, printQuestionNumber } from './questions.js';
import { getCategories } from './categories.js';

start();
listeners();

function listeners() {
    optionsAreaListener;
    asnwersListener;
    containerNextListener;
    questionAreaListener;
}

function start() {
    printCategory('A simple Trivia Game.');
    printQuestionNumber('🤘');
    getCategories();
 }

 export { start };
