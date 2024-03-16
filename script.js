import { userData } from './data.js';

let tableHeadElement = document.getElementById('table_head');
let tablebodyElement = document.getElementById('table_body');

function createTableHeader(tableDAta) {
    let a = Object.keys(tableDAta[0])
    a.forEach((headerKey) => {
        let tableHeaderKeyElement = document.createElement('th');
        tableHeaderKeyElement.innerText = headerKey;
        tableHeadElement.appendChild(tableHeaderKeyElement)
    })
}

function createTableBody(tableData) {
    // let a = Object.values(tableData);
    // console.log(a[1]['age']);
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

createTableBody(userData);
createTableHeader(userData);


