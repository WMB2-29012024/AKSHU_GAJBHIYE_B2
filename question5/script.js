const input = document.querySelector('input');
const p = document.querySelector('p');
const h4 = document.querySelector('h4');

let size = 0;
input.addEventListener('change', (e) => {
    console.log(e.target.files);
    size = e.target.files[0].size;

    let ab = e.target.files;

    

    h4.innerHTML = e.target.files[0].name;
    p.innerHTML = size / Math.pow(10, 6).toFixed(2) + "MB";

})
