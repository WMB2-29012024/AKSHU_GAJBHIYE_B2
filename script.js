import { userData } from './data.js';

let tableHeadElement = document.getElementById('table_head');
let tablebodyElement = document.getElementById('table_body');
const previousButton = document.getElementById('pre')
const nextbutton = document.getElementById('next')
const pageNoText = document.getElementById('para')

let currentPage = 1;
let dataLimit = 20;
let filttter = [];
const Url='https://jsonplaceholder.typicode.com/photos';

function getpageinated(data) {
    const startIndex = (currentPage - 1) * dataLimit;
    const endIndex = Math.min(startIndex + dataLimit, data.length);
    return data.slice(startIndex, endIndex);
}


previousButton.addEventListener('click', () => {

    const currentData = filttter.length ? filttter : userData;

    currentPage = currentPage > 1 ? currentPage - 1 : 1;
    pageNoText.innerText = currentPage;
    createTableBody(getpageinated(currentData));
})

nextbutton.addEventListener('click', () => {
    const currentData = filttter.length ? filttter : userData;

    const totalPages = Math.ceil(currentData.length / dataLimit);
    currentPage = currentPage < totalPages ? currentPage + 1 : totalPages;
    pageNoText.innerText = currentPage;
    createTableBody(getpageinated(currentData));
})


function handleSearchinput(inputKey) {
    const searchInputElement = document.getElementById(`${inputKey}-search-input`).value;
    const filterData = userData.filter((rowData) =>
        String(rowData[inputKey]).toLowerCase().includes(String(searchInputElement).toLowerCase())
    );
    filttter = filterData;
    createTableBody(getpageinated(filterData));

}


function createTableHeader(tableDAta) {

    let a = Object.keys(tableDAta[0])
    a.forEach((headerKey) => {
        let tableHeaderKeyElement = document.createElement('th');
        const searchInputElement = document.createElement('input');
        searchInputElement.type = 'search';
        searchInputElement.setAttribute('placeholder', `search here ${headerKey}`);
        searchInputElement.setAttribute('id', `${headerKey}-search-input`);

        searchInputElement.addEventListener('keyup', () => {
            handleSearchinput(headerKey);

        })

        tableHeaderKeyElement.innerText = headerKey;
        tableHeaderKeyElement.appendChild(searchInputElement)
        tableHeadElement.appendChild(tableHeaderKeyElement);


    })
}

function createTableBody(tableData) {
    tablebodyElement.innerHTML = "";

    tableData.forEach((rowData) => {
        let tableRowElement = document.createElement('tr');
        let tableRowValue = Object.values(rowData);
        tableRowValue.forEach((descriptionText) => {
            let tableDescriptionElement = document.createElement('td');
            tableDescriptionElement.innerText = descriptionText;
            tableRowElement.appendChild(tableDescriptionElement);
        })
        tablebodyElement.appendChild(tableRowElement)
    })

}


pageNoText.innerText = currentPage;
// createTableHeader(userData);
// createTableBody(getpageinated(userData));
// console.log(getpageinated(userData));

// const FetchTableData= async()=> {
//     console.log("Data Fetched");
//     // fetch(Url).then((res)=>res.json()).then((r)=>console.log(r));
//     const response=await fetch(Url);
//     const data=await response.json();
//     return data;
// }


// FetchTableData().then((data)=>{
//     createTableHeader(data);
// createTableBody(getpageinated(data));
// }).catch((error)=>console.log(error))

fetch(Url).then(response=>response.json()).then((data)=>{
    createTableHeader(data);
    createTableBody(getpageinated(data));
})


