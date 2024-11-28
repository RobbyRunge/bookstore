function init() {
  renderBooks();
}

function renderBooks() {
  let contentRef = document.getElementById('content');
  for (let i = 0; i < books.length; i++) {
    contentRef.innerHTML += generateOverviewBooks(i);
  }
}