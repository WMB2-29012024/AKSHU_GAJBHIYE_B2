const input = document.querySelector('input');
const furit = ['Apple', 'Mango', 'banana', 'graphs', 'coconut', 'potato', 'kiwi', 'tomoto'];
const ul = document.querySelector('ul');

function RenderArray() {
    furit.map((e) => {
        let a = document.createElement('li')
        console.log(e);
        a.innerText = e;
        ul.appendChild(a);
    })
}

RenderArray();


// input.addEventListener('keyup', (e) => {
//     // console.log(e.target.value);
    

// })




