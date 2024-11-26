function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

Book.prototype.displayInfo = function () {
    console.log('Title:', this.title, 'Author:', this.author ,'Pages:', this.pages)
}
let books = []

function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    books.push(newBook);
}

function searchBooksByTitle(title) {
    return books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function searchBooksByAuthor(author) {
    return books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

function pageCount() {
    return books.filter(book => book.pages > 100)
}

function updateBookProperties() {
    return books.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages 
    }));
}
addBook("Book1", "john", 200)
addBook("Book2", "bob", 100)
addBook("Book3", "ryan", 75)
addBook("Book4", "matt", 50)

books.forEach(book => book.displayInfo())

console.log(searchBooksByTitle("Book2")); 

console.log(searchBooksByAuthor("matt")); 

console.log(pageCount());