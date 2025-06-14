const myLibrary = [];

function Book(title,author,pages,status,summary) {

}

function addBookToLibrary(title,author,pages,status,summary) {
// 1. create new Book object
    let title = new Book(title,author,pages,status,summary);
// generate unique id. Must be defined here to avoid inheriting prototype's uuid...?
    title.id = crypto.randomUUID();
// store new obj in myLibrary
    myLibrary.push(title);
// 
}

function addLibraryToPage() {
    // iterate over myLibrary array to add books to html page.

    // the for...each card template:

    // create the card elements:
    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookBy = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookStatus = document.createElement("p");

    // assign classes to the created elements:
    bookCard.classList.add("book");
    bookTitle.classList.add('title');
    bookBy.classList.add('author');
    bookPages.classList.add('pages');
    bookStatus.classList.add('status');

    // append them to the first:
    let cardParts = [bookTitle,bookBy,bookPages,bookStatus];

    bookCard.appendChild(cardParts);

    // NOW... we customize card parts with the function parameters.

}