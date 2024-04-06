const btn = document.querySelector('button');
const loader = document.querySelector('.load');
const para = document.querySelector('p');
const ul = document.querySelector('ul');

loader.style.display = 'none'

async function getData() {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/todos');
        let response = await data.json();
        console.log(response);
        if (response) {
            loader.style.display = 'none'
            para.innerHTML ="Total Data : "+ response.length;

        }

        response.map((e) => {

            let title = e.title;
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerText = title;
        })


    } catch (error) {
        para.innerHTML = "Fail to Fetch data";
    }
}

btn.addEventListener('click', () => {
    console.log("hello");
    getData();
})




