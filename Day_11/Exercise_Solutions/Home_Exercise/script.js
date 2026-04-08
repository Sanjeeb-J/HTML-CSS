// Home Exercise Solution: Library Simulator (Classes)
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        for(let book of this.books) {
            console.log(`"${book.title}" by ${book.author}`);
        }
    }
}

let myLibrary = new Library();
myLibrary.addBook(new Book("1984", "George Orwell"));
myLibrary.addBook(new Book("Dune", "Frank Herbert"));
myLibrary.listBooks();
