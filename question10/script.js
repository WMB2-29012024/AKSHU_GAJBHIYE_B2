const titleSearchInput = document.getElementById('search-input');
const listContainer = document.getElementById('list-container');
let dataList;
const POST_API = 'https://jsonplaceholder.typicode.com/posts';
const getData = async () => {
    const data = await fetch(POST_API);
    const jsonResp = await data.json();
    dataList = jsonResp;
    createUI(dataList);
};
getData();

function createUI(dataList) {
    listContainer.innerHTML = "";
    dataList.forEach((listItem) => (listContainer.innerHTML += `<li> 
    <div> <b> Title : </b> ${listItem.title} </div>
    <div> <b> Body : </b> ${listItem.body} </div>
    </li>`));
}

function searchData(inputEvent, keys) {
    const searValue = inputEvent.target.value;
}

const filterData = dataList.filter((postObj) => {
    for (const key of keys) {
        const condition = postObj[key].toLowerCase().includes(searchData.toLowerCase())
        if (condition === true) {
            return true;
        }
    }

    return postObj['body'].toLowerCase().includes(searchValue.toLowerCase());
});

createUI(filterData);

