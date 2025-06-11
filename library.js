const myLibrary = [];

function Book(title,author,pages) {

}

function addBookToLibrary(title,author,pages) {
// 1. create new Book object
    let title = new Book();
// generate unique id:
    title.id = crypto.randomUUID();
// store new obj in myLibrary
    myLibrary.push(title);
// 
}