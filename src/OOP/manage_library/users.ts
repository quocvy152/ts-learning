import Book from "./books";

export interface UserType {
    id: number;
    fullname: string;
}

class User {
    id: number;
    fullname: string;
    borrowedBooks: Book[] = [];

    constructor({id, fullname}: UserType) {
        this.id = id; 
        this.fullname = fullname; 
        this.borrowedBooks = [];
    }

    borrow(book: Book): boolean {
        if(book.borrowBook()){
            this.borrowedBooks.push(book);
            return true;
        }
        return false;
    }

    return(book: Book): boolean {
        const idxBook = this.borrowedBooks.findIndex(bookBorrow => bookBorrow.isbn === book.isbn);
        if(idxBook > -1) {
            this.borrowedBooks.splice(idxBook, 1);
            book.returnBook();
            return true;
        }
        return false;
    }
}

export default User;