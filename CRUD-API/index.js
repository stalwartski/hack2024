const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

const booksFilePath = './books.json';

// Helper function to read books from the JSON file
const readBooksFromFile = () => {
    const data = fs.readFileSync(booksFilePath, 'utf-8');
    return JSON.parse(data);
};

// Helper function to write books to the JSON file
const writeBooksToFile = (books) => {
    fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
};

// Create a new book
app.post('/books', (req, res) => {
    const books = readBooksFromFile();
    const book = req.body;
    books.push(book);
    writeBooksToFile(books);
    res.status(201).send(book);
});

// Read all books
app.get('/books', (req, res) => {
    const books = readBooksFromFile();
    res.send(books);
});

// Read a single book by ID
app.get('/books/:id', (req, res) => {
    const books = readBooksFromFile();
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    res.send(book);
});

// Update a book by ID
app.put('/books/:id', (req, res) => {
    const books = readBooksFromFile();
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');

    book.title = req.body.title;
    book.author = req.body.author;
    writeBooksToFile(books);
    res.send(book);
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
    const books = readBooksFromFile();
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send('Book not found');

    const deletedBook = books.splice(bookIndex, 1);
    writeBooksToFile(books);
    res.send(deletedBook);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
