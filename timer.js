const input = document.querySelector('input');

let reminTime = 0;
let timer;


export function startCount() {

    // if (timer) {
    //     clearInterval(timer);
    //     reminTime = 0;
    // }


    reminTime = reminTime || input.value;
    timer = setInterval(() => {
        updatedTime();
    }, 1000);
}


function updatedTime() {
    if (reminTime > 0) {
        reminTime--;
        displayTimer();
    } else {
        clearInterval(timer);
    }
}


function displayTimer() {
    const hours = Math.floor(reminTime / 3600);
    const minutes = Math.floor((reminTime % 3600) / 60);
    const second = Math.floor(reminTime % 60);
    let h1 = document.querySelector('h1');
    h1.innerText = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`
}

export function resetTimer() {
    reminTime = 0;
    clearInterval(timer);
    startCount();
}

export function pauseTimer() {
    clearInterval(timer);
}
