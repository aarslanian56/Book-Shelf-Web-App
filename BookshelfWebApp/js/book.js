function Book(authors, language, subject, title, comment) {
  this.authors = authors;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.comment = '';

  this.render = function () {
    //Book Wrapper
    const bookWrapper = document.createElement("li");
    bookWrapper.style.border = '2px solid black'
    bookWrapper.style.margin = '1rem'
    bookWrapper.style.listStyleType = 'none'
    bookWrapper.style.backgroundColor = '#f4ca16'

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

    //Comment Input Field ()
    const commentInput = document.createElement('input')
    commentInput.style.marginLeft = '0.5rem'
    commentInput.placeholder = 'Write Comments Here'
    commentInput.maxLength = 280
    commentInput.style.display = 'none'

    //Send Commet Button ()
    const commentSendBtn = document.createElement('button')
    commentSendBtn.style.marginLeft = '0.5rem'
    commentSendBtn.textContent = 'Send'
    commentSendBtn.style.display = 'none'

    //CLICK Add Comment Button
    addCommentBtn.addEventListener('click', () => {
      if (commentInput.style.display === 'none' && commentSendBtn.style.display === 'none'){
        (commentInput.style.display = 'block') && (commentSendBtn.style.display = 'block')
      } else {
        (commentInput.style.display = 'none') && (commentSendBtn.style.display = 'none')}
    })

    //Book Comment & Styling
    const bookComment = document.createElement('h4');
    bookComment.textContent = `Comment: ${this.comment}`
    bookComment.style.marginLeft = '0.5rem'

    //CLICK comment send button
    commentSendBtn.addEventListener('click', () => {
      this.comment = commentInput.value
      bookComment.textContent = `Comment: ${this.comment}`
    })

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

    bookTitle.append(addCommentBtn,commentInput,commentSendBtn)
    bookWrapper.append(bookTitle,bookAuthor,bookLanguage,bookSubject,bookComment)

    return bookWrapper;
  };
}