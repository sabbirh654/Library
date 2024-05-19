const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let book1 = new Book('Algorithm', 'Corman', 900, 'not read');
let book2 = new Book('AI', 'Sabbir', 600, 'not read');

addBookToLibrary(book1);
addBookToLibrary(book2);

for(let book of myLibrary) {
    console.log(book);
}
