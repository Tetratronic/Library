const bookshelf = document.querySelector('.books-container');
const showButton = document.querySelector('.add-book');
const dialogForm = document.querySelector('#dialogue');
const confirmButton = document.querySelector('#confirmBtn');
window.onload = () => {
    document.querySelectorAll("button.particleButton").forEach(btn => {
        let btnBg = btn.parentNode.querySelector(".particles")
        let initalListener = () => {
            btnBg.classList.add("animated")
            btn.removeEventListener("click", initalListener)
        }
        btn.addEventListener("click", initalListener)
    })
}

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
        let removeBtn = document.createElement('Button');
        removeBtn.textContent = ''
        bookcard.appendChild(removeBtn);
        removeBtn.classList.add('remove-button')
        removeBtn.addEventListener('click', removeElement);
        let booktitle = document.createElement('h4');
        booktitle.classList.add('book-title')
        booktitle.textContent = shelf[b].title;
        bookcard.appendChild(booktitle);
        let bookauthor = document.createElement('p')
        bookauthor.textContent = shelf[b].author;
        bookcard.appendChild(bookauthor);
        let bookpages = document.createElement('p');
        bookpages.textContent = "Pages: " + shelf[b].pages;
        bookcard.appendChild(bookpages);
        let bookread = document.createElement('Button');
        bookread.textContent = (shelf[b].read ? "Read" : "Not Read");
        bookread.classList.add((shelf[b].read ? ('read') :'notread'))
        bookread.addEventListener('click', readToggle)
        bookcard.appendChild(bookread);
        
        bookshelf.appendChild(bookcard);
    }

    function readToggle(){
        const num = this.parentElement.dataset.num;
        this.classList.toggle('read');
        this.classList.toggle('notread')
        shelf[num].read ? (shelf[num].read = false, this.textContent='Not Read'): (shelf[num].read = 'yes', this.textContent='Read');
        console.log(shelf[num]);

    }

    function removeElement(){
        const num = this.parentElement.dataset.num;
        this.parentElement.remove();
        shelf.splice(num, 1);
    };

