/**
 * Initializes the application by loading data from localStorage and rendering the book list.
 */
function init() {
  getFromLocalStorage();
  renderBooks();
}

/**
 * Renders the list of books by clearing the current content and appending book templates.
 */
function renderBooks() {
  let booksRef = document.getElementById('content');
  booksRef.innerHTML = "";
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    booksRef.innerHTML += getTemplateBooks(indexBook);
    renderComments(indexBook);
  }
}

/**
 * Renders comments for a specific book.
 * 
 * @param {number} indexBook - The index of the book whose comments should be rendered.
 */
function renderComments(indexBook) {
  let commentRef = document.getElementById(`user-comments${indexBook}`);
  let booksRef = books[indexBook];
  commentRef.innerHTML = ""; 
  for (let indexComment = 0; indexComment < booksRef.comments.length; indexComment++) {
    commentRef.innerHTML += getTemplateComments(indexBook, indexComment);
  }
}

/**
 * Toggles the like status of a book and updates its like count.
 * 
 * @param {number} indexBook - The index of the book to like or unlike.
 */
function likeBook(indexBook) {
  let book = books[indexBook]; 

  if (book.liked) {
    book.likes -= 1; 
  } else {
    book.likes += 1; 
  }

  book.liked = !book.liked;

  saveToLocalStorage();
  init();
}

/**
 * Adds a new comment to a specific book.
 * 
 * @param {number} indexBook - The index of the book to add the comment to.
 */
function addCommit(indexBook) {
  let nameInputRef = document.getElementById(`name-input${indexBook}`); 
  let nameInput = nameInputRef.value;
  let commitInputRef = document.getElementById(`commit-input${indexBook}`);
  let commitInput = commitInputRef.value;
  if (nameInput == "" || commitInput == "") {
    alert("Bitte geben Sie Ihren Namen und ein Kommentar ein");
    return;
  } else {
    books[indexBook].comments.push({
      name: nameInput, 
      comment: commitInput
    });
  }
  nameInputRef.value = ""; 
  commitInputRef.value = ""; 
  saveToLocalStorage();
  init();
}

/**
 * Saves the current books data to localStorage.
 */
function saveToLocalStorage(){
  localStorage.setItem("books", JSON.stringify(books));
}

/**
 * Loads the books data from localStorage.
 */
function getFromLocalStorage() {
  let myObject = JSON.parse(localStorage.getItem("books"));

  if (myObject !== null) {
    books = myObject;
  }
} 