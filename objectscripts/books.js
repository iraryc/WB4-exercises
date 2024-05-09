"use strict"

//Array of objects
//To grab the a specific book we call the index of the book



let book = {
    title: 'Atomic Habits',
    pages: 320,
    author: "James Clear",
    genre: ["Self Help", "Personal Development"]

}

let books = [
    {
        title: 'The Thief Lord',
        pages: 345,
        author: 'Cornelia Funke',
        genre: ['Fantasy', 'Adventure'],
        isbn: '978-0545227704',
        price: 19.95
    },

    {
        title: "Eat That Frog!",
        pages: 117,
        author: 'Brian Tracy',
        genre: ['Self Challenging', 'Lessons'],
        price: 15.99
    },

    { 
        title: "A Thousand Splendid Suns", 
        pages: 86, 
        author: "Khaled Hosseini", 
        genre: ["Novel", "Domestic Fiction"] 
    }, 

    {
        title : "the seven habits of highly effective people",
        numpage:381,
        auther : "Stephen Covey" ,
        types : ["self help","business","psychology"]
    }

]

let allbook = {
    title:'My book',
    price: 10.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
        console.log(combinedvalue);
    }
}

let book2 = {
    title:'My book',
    price: 10.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
        console.log("The output is " + combinedvalue);
    }
}

let book3 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
       return combinedvalue;
    }
}

let book4 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
       return combinedvalue;
    }
}
book2.totalValue();
allbook.totalValue();

let book1total = book3.totalValue();
let book1tota2 = book4.totalValue();
console.log(book1total+ book1tota2);



console.log(`"${books[0].title}" is an ${books[0].genre[1]} book that costs $${books[0].price}`);

console.log("Title of the first book: " + books[0].title);
console.log("Author of the first book: " + books[0].author);
console.log("Title of the second book: " + books[1].title);
console.log(`Author of the second book: ${books[1].author}`);



console.log(books[1].genre[1], books[1].genre[0]); // this is to get the second second genre in the array in the genre category (remember that its zero based)

//Temperal literal strings using the backtick ``


