const API = 'https://jsonplaceholder.typicode.com/todos';

function getDataPromise(API) {
    return new Promise((res, reg) => {
        fetch(API).then(data => data.json()).then(jsonData => res(jsonData)).catch(() => console.log("no data"))
    })
}
getDataPromise(API).then(res => console.log(res))
