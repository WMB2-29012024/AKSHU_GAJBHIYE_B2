const input=document.querySelector('input');
const p=document.querySelector('p');


input.addEventListener('keyup',(elem)=>{
    p.innerHTML=input.value
})
