const para = document.querySelector('p');

async function getData() {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/todos');
        let response = await data.json();
        console.log(response)
        para.innerHTML = "fetched";
    } catch (error) {
        para.innerHTML = "Fail to Fetch data";
    }
}

getData();
