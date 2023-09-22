const bookshelf = document.querySelector('.books-container');
const showButton = document.querySelector('.add-book');
const dialogForm = document.querySelector('#dialogue');
const confirmButton = document.querySelector('#confirmBtn');

showButton.addEventListener("click", () => {
    dialogForm.showModal();
});

confirmButton.addEventListener('click', (event) => {
    const formdata = new FormData(document.getElementById('forme'));
    event.preventDefault();
    let data = [...formdata.values()];
    console.log(data);
    console.log('test');
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
};
