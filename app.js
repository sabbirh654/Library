const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.id = null;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    Book.prototype.toggleReadStatus = function () {
        if (this.readStatus == null) this.readStatus = 'not read yet';
        else {
            if (this.readStatus == 'not read yet') {
                this.readStatus = 'read';
            }
            else {
                this.readStatus = 'not read yet';
            }
        }
    }
}

    function addBookToLibrary(book) {
        myLibrary.push(book);
    }

    function populateBooks() {
        const bookList = document.querySelector('.bookList');

        removeChild(bookList);
        let bookIndex = 0;
        for (let book of myLibrary) {
            book.id = bookIndex;
            const card = createBookCard(book);
            bookIndex++;
            bookList.append(card);
        }
    }

    function removeChild(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    function createBookCard(book) {
        const card = document.createElement('div');
        card.className = 'card';
        card.id = book.id;

        const title = document.createElement('p');
        title.textContent = `Title : ${book.title}`;

        const author = document.createElement('p');
        author.textContent = `Author : ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages : ${book.pages}`;

        const status = document.createElement('p');
        status.textContent = `Status : `;
        const statusValue = document.createElement('span');

        statusValue.className = 'change-status';
        statusValue.textContent = `${book.readStatus}`;

        status.appendChild(statusValue);

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

        changeButton.addEventListener('click', changeBookStatusEventHandler);
        removeButton.addEventListener('click', removeBookEventHandler)

        bookListButton.append(changeButton, removeButton);
        card.append(title, author, pages, status, bookListButton);
        return card;
    }

    populateBooks();

    const dialog = document.querySelector('.form-dialog');

    function addBookButtonEventHandler() {
        dialog.showModal();
    }

    function removeBookEventHandler(e) {
        const bookIndex = +e.target.parentElement.parentElement.id;
        myLibrary.splice(bookIndex, 1);
        populateBooks();
    }

    function cancelFormButtonEventHandler(e) {
        e.preventDefault();
        dialog.close();
    }

    function formSubmitButtonEventHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('bookTitle');
        const author = formData.get('bookAuthor');
        const pages = formData.get('bookPages');
        let status = formData.get('bookReadStatus');

        if (status == null) status = 'not read yet';

        const newBook = new Book(title, author, pages, status);
        newBook.id = myLibrary.length;

        myLibrary.push(newBook);
        populateBooks();

        resetForm();
    }

    function resetForm() {
        const form = document.querySelector('.add-book-form');
        form.reset();
    }

    function changeBookStatusEventHandler(e) {
        const bookIndex = +e.target.parentElement.parentElement.id;
        const book = myLibrary[bookIndex];
        book.toggleReadStatus();

        const bookDom = document.querySelector(`.card#${CSS.escape(bookIndex)} .change-status`);
        bookDom.textContent = `${book.readStatus}`;
    }

    const addBookButton = document.querySelector('.common-button.addButton')
    addBookButton.addEventListener('click', addBookButtonEventHandler);

    const cancelFormButton = document.querySelector('.common-button.form-cancel');
    cancelFormButton.addEventListener('click', cancelFormButtonEventHandler);

    const formSubmitButton = document.querySelector('.add-book-form');
    formSubmitButton.addEventListener('submit', formSubmitButtonEventHandler);