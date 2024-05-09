"use strict"

let products = [
    {
        theme: "Barbie",
        description: "Barbie theme balloon garland",
        price: 300
    },
    
    {
        theme: "Gender Reveal",
        description: "Gender reveal theme balloon garland",
        price: 300
    },
    {
        theme: "Graduation",
        description: "Graduation reveal theme balloon garland",
        price: 200
    }
];

//product one is the parameter (parameter is just a name - it can be anything! )
function ShowDisplayProduct(_whatever) {
    console.log(`The products consist of ${_whatever.theme} theme with a description of: ${_whatever.description} and it costs $${_whatever.price}`)
};
//this is calling the arguments 
ShowDisplayProduct(products[2]);

//Parameter = Question
//Argument = Answer
//So when I make a function, it has questions on what it needs, and when I call it, I pass 
//in the arguments, which are the answers to the questions

let book = {
    title: "Eat that Frog",
    price: 19.95,
    displayInformation: function() {
        return `The title of the book is called "${this.title}" and the price is: $${this.price}` //this is called a method 
    }
}
console.log(book.displayInformation());

let productofballoon = {
    theme: "Graduation",
    description: "Graduation reveal theme balloon garland",
    price: 200,
    displayBalloonInformation: function() {
        return `The theme of this balloon garland is ${this.theme} and it will cost $${this.price}`
    }
}

console.log(productofballoon.displayBalloonInformation());