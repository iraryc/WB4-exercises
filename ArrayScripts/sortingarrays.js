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

    courses.sort();
    for(i=0; i < courses.length; i++){
        console.log(courses[i].Title);
    }