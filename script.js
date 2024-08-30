class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleReadStatus() {
        this.read = !this.read;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
        this.library = document.querySelector('.library')
        this.submitButton = document.querySelector("#submit-button");
        this.newBookButton = document.querySelector("#new-book")
        this.dialog = document.querySelector("dialog");
        this.closeButton = document.querySelector("#close");

        this.init();
    }

    init() {
        this.submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.addNewBook();
            this.dialog.close();
        });

        this.newBookButton.addEventListener("click", () => {
            this.dialog.showModal();
        });

        this.closeButton.addEventListener("click", () => {
            this.dialog.close();
        });

        this.addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));
        this.addBookToLibrary(new Book('The Almanack Of Naval Ravikant', 'Eric Jorgenson', 242, true));
        this.addBookToLibrary(new Book('Atomic Habits', 'James Clear', 319, true));
        this.addBookToLibrary(new Book('Six Easy Pieces', 'Richard P. Feynman', 138, true));
        this.addBookToLibrary(new Book('Skin in the Game', 'Nassim Taleb', 272, false));
        this.addBookToLibrary(new Book('Ikigai', 'Puigcerver Garcia', 300, true));
    }

    addNewBook() {
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector("#read").value;

        const newBook = new Book(title, author, pages, read);
        this.addBookToLibrary(newBook);
    }

    addBookToLibrary(book) {
        this.myLibrary.push(book);
    
        const bookDiv = document.createElement("div");
        bookDiv.className = "books";
        this.library.appendChild(bookDiv);
    
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
        });
    }
}

const library = new Library();