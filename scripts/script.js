function init() {
  renderBooks();
}

function renderBooks() {
  let booksRef = document.getElementById('content');
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    booksRef.innerHTML += getTemplateBooks(indexBook);
    renderComments(indexBook);
  }
}

function renderComments(indexBook) {
  let commentRef = document.getElementById(`user-comments${indexBook}`);
  let booksRef = books[indexBook];

  for (let commentIndex = 0; commentIndex < booksRef.comments.length; commentIndex++) {
    commentRef.innerHTML += getTemplateComments(indexBook, commentIndex);
  }
}
