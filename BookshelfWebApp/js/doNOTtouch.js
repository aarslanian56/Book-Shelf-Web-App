function Book(authors, language, subject, title, comment) {
  this.authors = authors;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.comment = '';

  this.render = function () {
    //console.log('render in motion')
    //Book Wrapper
    const bookWrapper = document.createElement("li");
    bookWrapper.style.border = '1px solid black'
    bookWrapper.style.margin = '1rem'
    bookWrapper.style.listStyleType = 'none'

    //Book Title & Styling
    const bookTitle = document.createElement('h1');
    bookTitle.textContent = this.title
    bookTitle.style.marginTop = '0.5rem'
    bookTitle.style.marginBottom = '0.5rem'
    bookTitle.style.marginLeft = '0.5rem'

    //Add Comment Button
    const addCommentBtn = document.createElement('button')
    addCommentBtn.textContent = 'Add Comment?'
    addCommentBtn.style.marginLeft = '0.5rem'

    //Comment Input Field
    const commentInput = document.createElement('input')
    commentInput.style.marginLeft = '0.5rem'
    commentInput.placeholder = 'Write Comments Here'
    commentInput.maxLength = 280
    commentInput.style.display = 'none'

    //Send Commet Button
    const commentSendBtn = document.createElement('button')
    commentSendBtn.style.marginLeft = '0.5rem'
    commentSendBtn.textContent = 'Send'
    commentSendBtn.style.display = 'none'

    //Clicking Add Comment Button
    addCommentBtn.addEventListener('click', () => {
      if (commentInput.style.display === 'none' && commentSendBtn.style.display === 'none'){
        (commentInput.style.display = 'block') && (commentSendBtn.style.display = 'block')
      } else {
        (commentInput.style.display = 'none') && (commentSendBtn.style.display = 'none')}
    })

    //Clicking Send Comment Button
    commentSendBtn.addEventListener('click', () => {
      this.comment = commentInput.value
      const bookComment = document.createElement('h4');
      bookComment.textContent = `Comment: ${this.comment}`
      bookComment.style.marginLeft = '0.5rem'
      bookWrapper.append(bookComment)
      this.render()
    })

    bookTitle.append(addCommentBtn,commentInput,commentSendBtn)
    
    //Book Author & Styling
    const bookAuthor = document.createElement('h3');
    bookAuthor.textContent = `Author: ${this.authors}`
    bookAuthor.style.marginLeft = '0.5rem'

    //Book Language & Styling
    const bookLanguage = document.createElement('h4');
    bookLanguage.textContent = `Language: ${this.language}`
    bookLanguage.style.marginLeft = '0.5rem'

    //Book Subject & Styling 
    const bookSubject = document.createElement('h4');
    bookSubject.textContent = `Subject: ${this.subject}`
    bookSubject.style.marginLeft = '0.5rem'

    //Book Comment & Styling
    const bookComment = document.createElement('h4');
    bookComment.textContent = `Comment: ${this.comment}`
    bookComment.style.marginLeft = '0.5rem'


    bookWrapper.append(bookTitle,bookAuthor,bookLanguage,bookSubject,bookComment)
    return bookWrapper;
  };
}






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
  
    //FUNCTION: addBook_(pushes new book instance into books array)___________________________________________
    this.addBook = function (book) {
      this.books.push(book);
    };
  
    //FUNCTION: filterVisibleBooks_____________________________________________________________________
    this.filterVisibleBooks = function (criteria) {
      this.visibleBooks = this.books.filter(criteria); 
      this.render();
    };
  }
  