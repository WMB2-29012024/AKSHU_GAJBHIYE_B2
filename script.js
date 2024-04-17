
const addComment = () => {
    const comment = document.querySelector('textarea');
    if (comment.value) {
        const data = new Date().toLocaleString();
        const commentData = {
            data: data,
            text: comment.value
        }
        const savedComment = JSON.parse(localStorage.getItem('comment') || "[]");
        savedComment.push(commentData)
        localStorage.setItem('comment', JSON.stringify(savedComment));
        comment.value = "";
    } else {
        alert("please enter comment")
    }

}
export { addComment }



