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
let book2 = new Book('AI', 'Sabbir', 600, 'read');

addBookToLibrary(book1);
addBookToLibrary(book2);

function populateBooks() {
    const bookList = document.querySelector('.bookList');

    for (let book of myLibrary) {
        const card = createBookCard(book);
        bookList.append(card);
    }
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('p');
    title.textContent = `Title : ${book.title}`;

    const author = document.createElement('p');
    author.textContent = `Author : ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages : ${book.pages}`;

    const status = document.createElement('p');
    status.textContent = `Status : ${book.readStatus}`;


    const bookListButton = document.createElement('div');
    bookListButton.className = 'bookList-button';

    //Change status button
    const changeButton = document.createElement('button');
    changeButton.className = 'common-button changeButton';
    changeButton.textContent = 'Change Status';

    //Remove Button
    const removeButton = document.createElement('button');
    removeButton.className = 'common-button removeButton';
    removeButton.textContent = 'Remove';

    bookListButton.append(changeButton, removeButton);

    card.append(title, author, pages, status, bookListButton);

    return card;
}

populateBooks();

function addBookButtonEventHandler() {
    const dialog = document.querySelector('.form-dialog');
    dialog.showModal();
}

function cancelFormButtonEventHandler() {
    const dialog = document.querySelector('.form-dialog');
    dialog.close();
}

const addBookButton = document.querySelector('.common-button.addButton')
addBookButton.addEventListener('click', addBookButtonEventHandler);

const cancelFormButton = document.querySelector('.common-button.form-cancel');
cancelFormButton.addEventListener('click', cancelFormButtonEventHandler);
