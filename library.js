const myLibrary = [];

function Book(title,author,pages,status,summary) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status,
    this.summary = summary
}

function addBookToLibrary(t,a,p,status,sum) {
// 1. create new Book object
    let newBook = new Book(t,a,p,status,sum);
// generate unique id. Must be defined here to avoid inheriting prototype's uuid...?
    newBook.id = crypto.randomUUID();
// store new obj in myLibrary
    myLibrary.push(newBook);
// 
}

function addLibraryToPage() {

    // iterate over myLibrary[]
    for (bk of myLibrary) {
    
    // create the card elements:
    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookBy = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookStatus = document.createElement("p");
    const bookStatCheck = document.createElement("input");
    const bookRemove = document.createElement("a");
    // assign classes to created elements:
    bookCard.classList.add("book");
    bookTitle.classList.add('title');
    bookBy.classList.add('author');
    bookPages.classList.add('pages');
    bookStatus.classList.add('status');
    bookRemove.classList.add("remove");
    // add innerText content:
    bookTitle.innerText = bk.title;
    bookBy.innerText = `by ${bk.author}`;
    bookPages.innerText = `${bk.pages} pages`;
    bookRemove.innerText = "x";
    // assign misc values:
    bookRemove.href = "/";
    bookStatCheck.type = "checkbox";

    // add event listeners:
    bookRemove.addEventListener("click", removeBook());
    bookStatCheck.addEventListener("change", () => { 
        if(bookStatCheck.checked) {
            console.log("checked");
            // call a function here
        } else {
            console.log("unchecked");
            // call another function here
        } 
    });


    // append parts to the card body:
    let cardParts = [bookTitle,bookBy,bookPages,bookStatus];
    bookCard.appendChild(cardParts);

    }
}

function removeBook() {
    // remove a book card from page
}

// add event listeners to all status checkboxes:
// Does this need to be outside our main function, or should an event listener be declared in the main function??
const allStatuses = document.querySelectorAll("div.status > input");
allStatuses.forEach(toggleStatus(chkbx));
    
function toggleStatus(x) {

    x.addEventListener("change", () => { 
        if(x.checked) {console.log("checked");} else {console.log("unchecked");} 
    });
    // add a bg color and text change to the above listener.
}
