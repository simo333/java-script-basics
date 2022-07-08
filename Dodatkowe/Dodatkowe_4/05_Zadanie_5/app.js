class Product {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    printInfo() {
        console.log(`${this.constructor.name} - title: ${this.title}, author: ${this.author}`);
    }
}

class Ebook extends Product {
    download() {
        const txt = `Ściąganie... ${this.title}`;
        console.log(txt);
        return txt;
    }
}

class Book extends Product {
    order() {
        const txt = "Podaj adres dostawy!";
        console.log(txt);
        return txt;
    }
}

const ebook = new Ebook("Ciemniejsze niebo", "Ruben Eliassen");

console.log("ebook", ebook);
ebook.printInfo();
ebook.download();

const book = new Book("Harry Potter", "JK Rowling");
book.printInfo();
book.order();
