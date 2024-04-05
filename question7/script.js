const option1 = document.getElementById('light');
const option2 = document.getElementById('dark');
const main = document.querySelector('#main')
const p = document.querySelector('p');

const select = document.querySelector('select');

select.addEventListener('change', (e) => {
    console.log(option2.value);
    if (select.value == 'Light') {
        main.style.backgroundColor = 'white';
        p.style.color = 'black';
    } else if (select.value == 'Dark') {
        main.style.backgroundColor = 'black';
        p.style.color = 'white';
    }
})
