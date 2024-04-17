function showComment() {
    const saveComment = JSON.parse(localStorage.getItem('comment') || "[]");
    let ul = document.querySelector('ul');
    console.log(saveComment);
    saveComment.map((data) => {
        ul.innerHTML+=`${data.data}`
        
    })
}

export { showComment };