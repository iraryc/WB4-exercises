"use strict"

// This is for words/letter
let kids = ["Natalie", "Brittany", "Zachary"];
kids.sort(); // Sorts the array
let numKids = kids.length;
for(let i = 0; i < numKids; i++) {
 console.log(kids[i]);
}
//OUTPUT
// Brittany
// Natalie
// Zachary

//This is for numbers 
function compareAscendingNumber(a, b) {
    if (a < b) return -1; // right order
    else if (a == b) return 0; // same values
    else return 1; // swap, wrong order
   }
   let numeros = [3, 27, 400, 1, 111, 5];
   numeros.sort(compareAscendingNumber);
   console.log(numeros);
    
   // Results: 1, 3, 5, 27, 111, 400

   //You can also use an anonomys function with numbers:
    let numbers1 = [3, 27, 400, 1, 111, 5];
    numbers1.sort(function(a, b){
    if (a < b) return -1;
    else if (a == b) return 0;
    else return 1;
    });
    console.log(numbers1);
    // Results: [1, 3, 5, 27, 111, 400]

    //if you want descending order: 
    let numbers = [3, 27, 400, 1, 111, 5];
    numbers.sort(function(a, b){
    if (a > b) return -1; // right order
    else if (a == b) return 0;
    else return 1; // swap, wrong order
    });
    console.log(numbers);
    // Results: [400, 111, 27, 5, 3, 1]

    //keeps them in alphabetical order regalrdess if its uppercase or lowercase:
    let names = ["zeph", "anderson", "Zachary", "Adam"];
    names.sort(function (a,b) {
    let aUpper = a.toUpperCase();
    let bUpper = b.toUpperCase();
    if (aUpper < bUpper) return -1;
    else if (aUpper == bUpper) return 0;
    else return 1;
    }); // Sorts the array in a case-insensitive way
    let numNames = names.length;
    for(let i = 0; i < numNames; i++) {
    console.log(names[i]);
    }


    let courses = [
            {
            CourseId: "PROG100",
            Title: "HTML/CSS/Git",
            Location: "Classroom 7",
            StartDate: "09/08/22",
            Fee: "100.00",
            },
            {
            CourseId: "PROG200",
            Title: "JavaScript",
            Location: "Classroom 9",
            StartDate: "11/22/22",
            Fee: "350.00",
            },
            {
            CourseId: "PROG300",
            Title: "Java",
            Location: "Classroom 1",
            StartDate: "01/09/23",
            Fee: "50.00",
            },
            {
            CourseId: "PROG400",
            Title: "SQL and Databases",
            Location: "Classroom 7",
            StartDate: "03/16/23",
            Fee: "50.00",
            },
            {
            CourseId: "PROJ500",
            Title: "Angular",
            Location: "Classroom 1",
            StartDate: "04/25/23",
            Fee: "50.00",
            }
           
    ]

    courses.sort((a, b) => a.Title.localeCompare(b.Title));
    for(let i=0; i < courses.length; i++){
        console.log(courses[i].Title);
    }

    //products_sortings.js
    let products = [
            {product: "Gummy Worms", price: 5.79},
            {product: "Plain M&Ms", price: 2.89},
            {product: "Peanut M&Ms", price: 2.89},
            {product: "Swedish Fish", price: 3.79},
            {product: "Hersheys Bar", price: 1.79},
            {product: "Hot Cheetos", price: 4.79},
            {product: "Pringles", price: 2.79},
            {product: "Kit Kat", price: 3.79},
            {product: "Twix", price: 4.79},
            {product: "Oreos", price: 5.79}
            // TODO: fill the array with 10 candies of various
            // price ranges
           ];

    products.sort((a, b) => a.product.localeCompare(b.product));
    for(let i = 0; i < products.length; i++){
        console.log(products[i].product);
    }

    products.sort(function(a, b){
        if (a.price > b.price) return -1;
        else if (a.price == b.price) return 0;
        else return 1;
       });
       let numProducts = products.length;
       for(let i = 0; i < numProducts; i++) {
        console.log(products[i].product + 
        " $" + products[i].price.toFixed(2));}

        //average and median 
        
    let students = [
        {name: "Zephaniah", scores: [100, 96, 99, 92]},
        {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
        {name: "Siddalee", scores: [86, 72, 92]},
        {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
        {name: "Elisha", scores: [89, 100]},
        {name: "Ezra", scores: [100, 99, 100, 87]}
   ];