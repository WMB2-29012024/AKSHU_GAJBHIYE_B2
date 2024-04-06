
// const data=fetch('https://jsonplaceholder.typicode.com/todos');

async function getData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos');
    let response = await data.json();
    console.log(response);
}

getData();