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
}