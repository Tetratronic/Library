const bookshelf = document.querySelector('.books-container');
const showButton = document.querySelector('.add-book');
const dialogForm = document.querySelector('#dialogue');
const confirmButton = document.querySelector('#confirmBtn');

showButton.addEventListener("click", () => {
    dialogForm.showModal();
});

confirmButton.addEventListener('click', (event) => {
    if(!dialogForm.firstElementChild.checkValidity()){
        dialogForm.firstElementChild.reportValidity();
        return;
    }
    event.preventDefault();
    console.log('test');
    const formdata = new FormData(document.getElementById('forme'));
    let data = [...formdata.values()];
    addBook(...data)
    dialogForm.close();
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

function renderBook(){
        let b = shelf.length - 1;
        let bookcard = document.createElement('div');
        bookcard.dataset.num = b;
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
        bookread.textContent = "Read: " + (shelf[b].read ? "Yes" : "No");
        bookcard.appendChild(bookread);
        let removeBtn = document.createElement('Button');
        removeBtn.textContent = 'Remove'
        bookcard.appendChild(removeBtn);
        removeBtn.addEventListener('click', removeElement);
        bookshelf.appendChild(bookcard);
    }

    function removeElement(){
        const num = this.parentElement.dataset.num;
        this.parentElement.remove();
        shelf.splice(num, 1);
    };

