const button = document.querySelector('button');


async function getData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos');
    let response = await data.json();
    console.log(response);
}
button.addEventListener('click', () => {
    getData();
})


