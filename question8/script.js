const load = document.querySelector('.load');
const btn = document.querySelector('button');
const h5=document.querySelector('h5');


load.style.display='none'

async function getData() {

    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/todos');
        let response = await data.json();
        console.log(response);
        if (response) {
            btn.innerHTML = 'Fetched'
        }
    } catch (error) {
        btn.innerHTML = "Fail to Fetch data";
    }
}


btn.addEventListener('click', () => {
    getData();
})

