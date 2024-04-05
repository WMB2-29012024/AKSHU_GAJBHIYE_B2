const input = document.querySelector('input');
const input2 = document.getElementById('female');
const btn = document.querySelector('button');
const p = document.querySelector('p');


btn.addEventListener('click', (a) => {
    input.checked ? p.innerHTML = input.value : p.innerHTML = input2.value
})