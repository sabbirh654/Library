// const myLibrary = [];

// function Book(title, author, pages, readStatus) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.readStatus = readStatus;
// }

// function addBookToLibrary(book) {
//     myLibrary.push(book);
// }

// let book1 = new Book('Algorithm', 'Corman', 900, 'not read');
// let book2 = new Book('AI', 'Sabbir', 600, 'not read');

// addBookToLibrary(book1);
// addBookToLibrary(book2);

// function addBookButtonEventHandler() {
//     const newBook = getFormData();
//     addBookToLibrary(newBook);

//     showBooks();
// }

// function showBooks() {

//     const showBookSection = document.querySelector('.show-book-section');
    
//     for(let book of myLibrary) {
//         const card = document.createElement('div');
//         card.className = 'card';

//         const title = document.createElement('p');
//         title.className = 'bookTitle';
//         title.textContent = `Title : ${book.title}`;

//         const author = document.createElement('p');
//         author.className = 'bookAuthor';
//         author.textContent = `Author : ${book.author}`;

//         const pages = document.createElement('p');
//         pages.className = 'bookPages';
//         pages.textContent = `Pages : ${book.pages}`;

//         const status = document.createElement('p');
//         status.className = 'bookStatus';
//         status.textContent = `Status : ${book.readStatus}`;

//         card.appendChild(title);
//         card.appendChild(author);
//         card.appendChild(pages);
//         card.appendChild(status);

//         showBookSection.appendChild(card);
//     }
// }

// function getFormData() {
//     const title = document.querySelector('#title').value;
//     const author = document.querySelector('#author').value;
//     const pages = document.querySelector('#pages').value;
//     const status = document.querySelector('#status').value;

//     const newBook = new Book(title, author, pages, status);

//     return newBook;
// }

// const addBookButton = document.querySelector('.addBookButton');
// addBookButton.addEventListener('click', addBookButtonEventHandler);

// showBooks();
