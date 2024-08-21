const myLibrary = [];
const library = document.querySelector('.library')
const submitButton = document.querySelector("#submit-button");
const new_book = document.querySelector("#new-book")
const dialog = document.querySelector("dialog");
const close = document.querySelector("#close");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);

    const bookDiv = document.createElement("div");
    bookDiv.className = "books";
    library.appendChild(bookDiv);

    const title = document.createElement("p");
    title.className = "title";
    title.innerHTML = `<b>Title:</b> ${book.title}`;
    bookDiv.appendChild(title);

    const author = document.createElement("p");
    author.className = "author";
    author.innerHTML = `<b>Author:</b> ${book.author}`;
    bookDiv.appendChild(author);

    const pages = document.createElement("p");
    pages.className = "pages";
    pages.innerHTML = `<b>Pages:</b> ${book.pages}`;
    bookDiv.appendChild(pages);

    const read = document.createElement("p");
    read.className = "read";
    if(book.read === true) {
        read.innerHTML = `<b>Read?</b> Yes`;
    } else {
        read.innerHTML = `<b>Read?</b> No`;
    }
    bookDiv.appendChild(read);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "bookButtons";
    bookDiv.appendChild(buttonsDiv);

    const readStatusButton = document.createElement("button");
    readStatusButton.innerHTML = book.read ? "I've Finished!" : "Not Finished";
    readStatusButton.className = book.read ? "read-status-button-finished" : "read-status-button-not-finished";
    buttonsDiv.appendChild(readStatusButton);

    readStatusButton.addEventListener("click", () => {
        book.toggleReadStatus();
        readStatusButton.innerHTML = book.read ? "I've Finished!" : "Not Finished";
        readStatusButton.className = book.read ? "read-status-button-finished" : "read-status-button-not-finished";
        read.innerHTML = `<b>Read?</b> ${book.read ? 'Yes' : 'No'}`;
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = "Delete";
    buttonsDiv.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        bookDiv.remove();
    })

}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;

    const bookToBeAdded = new Book(title, author, pages, read);
    addBookToLibrary(bookToBeAdded);

    dialog.close();
})

new_book.addEventListener("click", () => {
    dialog.showModal();
})

close.addEventListener("click", () => {
    dialog.close();
})

addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));
addBookToLibrary(new Book('The Almanack Of Naval Ravikant', 'Eric Jorgenson', 242, true));
addBookToLibrary(new Book('Atomic Habits', 'James Clear', 319, true));
addBookToLibrary(new Book('Six Easy Pieces', 'Richard P. Feynman', 138, true));
addBookToLibrary(new Book('Skin in the Game', 'Nassim Taleb', 272, false));
addBookToLibrary(new Book('Ikigai', 'Puigcerver Garcia', 300, true));



