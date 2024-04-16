const id = document.querySelector('.id');
const postTitle = document.querySelector('.title');
const postBody = document.querySelector('.body');
const btn = document.querySelector('button');

let PostId = 1;
let countTimer;

btn.addEventListener('click', () => {

    
    PostId++;
    clearTimeout(countTimer);
    countTimer = setTimeout(() => {
        getData();
    }, 500);
})



function renderData(data) {
    id.innerHTML = `Post id : ${data.id}`;
    postTitle.innerHTML = `Post title : ${data.title}`;
    postBody.innerHTML = `Post body : ${data.body}`;
}

async function getData() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${PostId}`);
    const data = await response.json();
    renderData(data);
}

getData();