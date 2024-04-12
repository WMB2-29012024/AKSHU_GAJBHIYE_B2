// https://jsonplaceholder.typicode.com/posts?userId=1

const selet = document.querySelector('select');
const contant = document.querySelector('.contant');




function getUserId(userid) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
    .then(res => res.json())
    .then(data => {
        console.log(data[0].title);
        contant.innerHTML = `<h1> ${data[0].title} </h1> <h2> ${data[0].body} </h2> <h2> Comments </h2>`
    }).then(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userid}`)
        .then(res => res.json())
        .then((data) => {
            data.forEach((e) => {
                contant.innerHTML += ` </br> <h4> name : ${e.name} </h4>
                    <p>comment : ${e.body} </p>`
            })
        })
    })
}

selet.addEventListener('change', (e) => {
    getUserId(e.target.value);
})






