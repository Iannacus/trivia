import { categories } from './categories.js';
import { selectOptions } from './printOptions.js';
import{ hiddenArea, containerNextListener, optionsAreaListener, asnwersListener } from './listeners.js'

init();
listeners();

function listeners() {
    optionsAreaListener;
    asnwersListener;
    containerNextListener;
}

function init() {
     hiddenArea.innerHTML = selectOptions(categories);
 }
