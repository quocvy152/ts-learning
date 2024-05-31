export interface BookType {
    title: string;
    author: string;
    isbn: string;
    availableCopies: number;
}

class Book {
    title: string;
    author: string;
    isbn: string;
    availableCopies: number;

    constructor({title, author, isbn, availableCopies}: BookType) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.availableCopies = availableCopies;
    }

    borrowBook(): boolean {
        if(this.availableCopies > 0) {
            this.availableCopies--;
            return true;
        }
        return false;
    }

    returnBook(): void {
        this.availableCopies++;
    }
}

export default Book;