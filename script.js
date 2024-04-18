import { startCount, resetTimer, pauseTimer } from "./timer.js";

let start = document.querySelector('#start');
let restart = document.querySelector('#reset');
let pause = document.querySelector('#pause')

start.addEventListener('click', startCount);

restart.addEventListener('click', resetTimer);

pause.addEventListener('click', pauseTimer)





