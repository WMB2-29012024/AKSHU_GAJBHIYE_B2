const input1 = document.querySelector('input');
const input2 = document.querySelector('.input2');
const p = document.querySelector('p');
const submit = document.querySelector('button');
const form=document.querySelector('form');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inp1=parseInt(input1.value);
    let inp2=parseInt(input2.value);
    let sum=inp1+inp2;
    p.innerHTML=sum;
    
})


