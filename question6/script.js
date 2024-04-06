const button = document.querySelector('button');
const main = document.querySelector('.load');
const para = document.querySelector('p');
main.style.display = 'none';

async function getData() {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/todos');
        let response = await data.json();
        console.log(response);
        if (response) {
            main.style.display = 'inline-block';
            para.innerHTML = 'Fetched !!';
            main.style.display = 'none';
        }


    } catch (error) {
        para.innerHTML = "Fail to Fetch data";
    }
}
button.addEventListener('click', () => {
    getData();
})


