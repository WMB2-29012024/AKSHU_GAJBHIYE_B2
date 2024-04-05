const select = document.querySelector('select');
const p = document.querySelector('p');


select.addEventListener('change', (e) => {
    p.innerHTML = select.value;
})

