

const ul = document.getElementById('data-list');
const btn = document.getElementById('next-btn');
const pre = document.getElementById('pre-btn');
let todoId = 1;

async function displayData() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        const data = await response.json();
        console.log(data);
        const listItem = document.createElement('li');
        listItem.innerHTML = `Title : ${data.title}`;
        ul.appendChild(listItem);
    } catch (error) {
        console.log('no data to fetch');
    }
}

btn.addEventListener('click', async () => {
    todoId += 1;
    ul.innerHTML = '';
    await displayData();
});

pre.addEventListener('click', async () => {
    todoId -= 1;
    ul.innerHTML = '';
    await displayData();
})

displayData();
