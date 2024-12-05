function renderAll() {
  renderBooks();
}

function renderBooks() {
  let booksRef = document.getElementById('content');
  booksRef.innerHTML = "";
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    booksRef.innerHTML += getTemplateBooks(indexBook);
    renderComments(indexBook);
  }
}

function renderComments(indexBook) {
  let commentRef = document.getElementById(`user-comments${indexBook}`);
  let booksRef = books[indexBook];
  commentRef.innerHTML = ""; 
  for (let indexComment = 0; indexComment < booksRef.comments.length; indexComment++) {
    commentRef.innerHTML += getTemplateComments(indexBook, indexComment);
  }
}

// function likeBook(indexBook) {
// }

function addCommit(indexBook) {
  let nameInputRef = document.getElementById(`name-input${indexBook}`); 
  let nameInput = nameInputRef.value;

  let commitInputRef = document.getElementById(`commit-input${indexBook}`);
  let commitInput = commitInputRef.value;

  if (nameInput == "" || commitInput == "") {
    alert("Bitte geben Sie Ihren Namen und ein Kommentar ein")
    return;
  } else {
    books[indexBook].comments.push({
      name: nameInput, 
      comment: commitInput
    })
  }

  nameInputRef.value = ""; 
  commitInputRef.value = ""; 
  
  renderAll();
}