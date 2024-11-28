function generateOverviewBooks(indexBooks) {
  return `      
      <section class="book-container">
        <h1 class="text-color padding">${books[indexBooks].name}</h1>
        <div class="border"></div>
        <div class="padding"><img class="img-book" src="styles/imgs/book-307512_1280.png" alt="" /></div>
        <div class="border"></div>
        <div class="price-like-container padding">
          <div class="price-like">
            <p class="text-color-2">${books[indexBooks].price} €</p>
            <div class="likes-heart-position">
              <p class="text-color">${books[indexBooks].likes} 
              <button><img class="img-heart" src="./styles/imgs/red-304570_1280.png" alt="" /></button>
              </p>
            </div>
          </div>
          <div>
            <table class="text-color">
              <tr>
                <td>Author</td>
                <td class="table-position">${books[indexBooks].author}</td>
              </tr>
              <tr>
                <td>Erscheinungsjahr</td>
                <td class="table-position">${books[indexBooks].publishedYear}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td class="table-position">${books[indexBooks].genre}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="border"></div>
        <div class="comment-container padding">
          <div class="content padding">
            <table>
              <th><h2 class="text-color">Kommentare</h2></th>
              <tr>
                <td class="text-color">[ Roberto ]</td>
                <td class="text-color">Geiles Buch</td>
              </tr>
              <tr>
                <td class="text-color">[ Kevin ]</td>
                <td class="text-color">Sehr gurt zum lesen, fesselt ein bis zum Schluss</td>
              </tr>
              <tr>
                <td class="text-color">[ Tobias ]</td>
                <td class="text-color">super Buch, sehr interessant</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="input-botton-position">
          <input type="text" placeholder="Schreibe dein Kommentar ..." />
          <button><img class="img-send-button" src="./styles/imgs/paper-plane-7485769_1280.png" alt="" /></button>
        </div>
      </section>
      <br>`
}