function getTemplateBooks(indexBook) {
  return `      
      <section class="book-container">
        <h1 class="text-color padding">${books[indexBook].name}</h1>
        <div class="border"></div>
        <div class="padding"><img class="img-book" src="styles/imgs/book-307512_1280.png" alt="" /></div>
        <div class="border"></div>
        <div class="price-like-container padding">
          <div class="price-like">
            <p class="text-color-2">${books[indexBook].price} €</p>
            <div class="likes-heart-position">
              <p class="text-color">${books[indexBook].likes} 
              <button id="like-btn"><img class="img-heart" src="./styles/imgs/heartleer.png" alt=""></button>
              </p>
            </div>
          </div>
          <div>
            <table class="text-color">
              <tr>
                <td>Author :</td>
                <td class="table-position">${books[indexBook].author}</td>
              </tr>
              <tr>
                <td>Erscheinungsjahr :</td>
                <td class="table-position">${books[indexBook].publishedYear}</td>
              </tr>
              <tr>
                <td>Genre :</td>
                <td class="table-position">${books[indexBook].genre}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="border"></div>
        <div class="comment-container padding">
          <div class="content padding">
            <h2 class="text-color">Kommentare</h2>
            <table id="user-comments${indexBook}"></table>
          </div>
        </div>
        <div class="input-botton-position">
          <input type="text" id="name-input${indexBook}" placeholder="Ihr Name ..." required />
          <input type="text" id="commit-input${indexBook}" placeholder="Schreibe dein Kommentar ..." required />
          <button onclick="addCommit(${indexBook})"><img class="img-send-button" src="./styles/imgs/paper-plane-7485769_1280.png" alt="" /></button>
        </div>
      </section>
      <br>`
}

function getTemplateComments(indexBook ,indexComment) {
  return `
    <tr>
       <td class="padding-td-name">${books[indexBook].comments[indexComment].name}:</td>
       <td class="padding-td-comment">${books[indexBook].comments[indexComment].comment}</td>
    </tr>`
}