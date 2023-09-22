const bookshelf = document.querySelector('.books-container');
const showButton = document.querySelector('.add-book');
const dialogForm = document.querySelector('#dialogue');
const confirmButton = document.querySelector('#confirmBtn');

showButton.addEventListener("click", () => {
    dialogForm.showModal();
});

confirmButton.addEventListener('click', (event) => {
    event.preventDefault();
    const formdata = new FormData(document.getElementById('forme'));
    let data = [...formdata.values()];
    addBook(...data)
})

let shelf = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title, author, pages, read){
    let book = new Book(title,author,pages,read);
    shelf.push(book);
    renderBook();
};

function renderBook(b){
        let bookcard = document.createElement('div');
        bookcard.classList.add('book');
        let booktitle = document.createElement('h2');
        booktitle.textContent = shelf[b].title;
        bookcard.appendChild(booktitle);
        let bookauthor = document.createElement('p')
        bookauthor.textContent = shelf[b].author;
        bookcard.appendChild(bookauthor);
        let bookpages = document.createElement('p');
        bookpages.textContent = "Pages: " + shelf[b].pages;
        bookcard.appendChild(bookpages);
        let bookread = document.createElement('p');
        bookread.textContent = "Read" + shelf[b].read;
        bookcard.appendChild(bookread);
        bookshelf.appendChild(bookcard);
    }

