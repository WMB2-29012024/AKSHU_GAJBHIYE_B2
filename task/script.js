const hum = document.querySelector('.hum');
const slider=document.querySelector('.sidebar');
let flag = 0;
hum.addEventListener('click', () => {
    if (flag == 0) {
        hum.innerHTML = `✕`
        flag = 1;
        slider.style.left='0px'
    } else {
        hum.innerHTML = `☰`
        flag = 0;
        slider.style.left='-250px'
    }
})

