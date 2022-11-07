function Bookshelf(htmlElement, books = []) {
  this.books = books;
  this.htmlElement = htmlElement;
  this.visibleBooks = books;

  //FUNCTION: seed____________________________________________________________________________ 
  this.seed = function (data) {
    data.forEach((bookInfo) => { 
      const book = new Book( 
        bookInfo.author,
        bookInfo.language,
        bookInfo.subject,
        bookInfo.title,
        bookInfo.comment
      );
      this.addBook(book);
    });
    this.visibleBooks = this.books;
    this.render();
  };

  //FUNCTION: render_________________________________________________________________________________
  this.render = function () {
    const ul = document.createElement("ul");
      const books = this.visibleBooks.map((b) => b.render()); 
      ul.replaceChildren(...books); //replace ul children with books
      this.htmlElement.replaceChildren(ul); //replace html ul children with rendered ul children (books)
    };

  //FUNCTION: addBook_______________________________________________________________
  this.addBook = function (book) {
    this.books.push(book);
  };

  //FUNCTION: filterVisibleBooks_____________________________________________________________________
  this.filterVisibleBooks = function (criteria) {
    this.visibleBooks = this.books.filter(criteria); 
    this.render();
  };
}
