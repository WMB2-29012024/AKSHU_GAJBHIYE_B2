const label = document.querySelector('label');
const h2 = document.querySelector('h2');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const form=document.querySelector('form');



input.addEventListener('change', (e) => {
    
    let a = e.target.value;
    btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        h2.innerHTML = 'Hi ' + a;
        input.value="";
        
    })
    
})


