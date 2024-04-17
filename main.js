import { addComment } from "./script.js";
import { showComment } from "./commentList.js";

showComment();
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment();
    showComment();

})




