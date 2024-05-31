import Book from "./books";
import User from "./users";

class Library {
    books: Book[];
    users: User[];
    
    constructor() {
        this.books = [];
        this.users = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(isbn: string): void {
        this.books = this.books.filter(bookItem => bookItem.isbn !== isbn);
    }

    registerUser(user: User): void {
        this.users.push(user);
    }

    findBookByTile(title: string): Book | null {
        return this.books.find(book => book.title === title) || null;
    }

    findByUserId(id: number): User | null {
        return this.users.find(user => user.id === id) || null;
    }
}

export default Library;