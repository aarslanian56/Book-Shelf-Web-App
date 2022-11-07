// INITIALIZATION___________________________________________________
const bookshelfElement = document.querySelector(".books");
const bookshelf = new Bookshelf(bookshelfElement);
bookshelf.seed(bookData);
//bookshelf.render();

//SEARCH LOGIC_________________________________________________________
const searchInput = document.querySelector("#searchBar");
const searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filteredQuery = query.replace('the','')
  const searchFn = (b) => b.title.toLowerCase().includes(filteredQuery);
  bookshelf.filterVisibleBooks(searchFn);
});

//ADD BOOK LOGIC____________________________________________________________
const newTitleInput = document.querySelector("#newTitleBar");
const newAuthorInput = document.querySelector("#newAuthorBar");
const newLanguageInput = document.querySelector("#newLanguageBar");
const newSubjectInput = document.querySelector("#newSubjectBar");
const addBookBtn = document.querySelector("#addBookBtn");

addBookBtn.addEventListener('click', () => {
  const title = newTitleInput.value;
  const author = newAuthorInput.value;
  const language = newLanguageInput.value;
  const subject = newSubjectInput.value; 

  if (!title || !author || !language || !subject){
    alert('Please fill in missing information')
    return;
  }

  bookData.push({author,language,subject,title}) 
  bookshelf.seed(bookData);
  //bookshelf.render();
});



