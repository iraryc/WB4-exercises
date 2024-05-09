"use strict"
// created an array and looped and printed it out
let familynames = ["Alondra", "Ines", "Miguel", "Chango"]

for(let i = 0; i < 4; i++) {
    console.log(familynames[i]);
}

//foods.js
let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ]

let cost = 0;
let tax = .08;
let tip = .18;
let totalcost = 0;
    for(let i = 0; i < lunch.length; i++) {
        cost += lunch[i].price;
        totalcost = (cost*tax) + cost + tip;
    }



console.log(`the total amount was ${cost.toFixed(2)}`);
console.log(`The total amount including tax and tip is ${totalcost.toFixed(2)}`);


//avg_scores.js

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

// Define a function to calculate the average score in an array
function getAverage(score) {
    
    // Initialize a variable to store the sum of all scores
    let sum = 0

    // Loop through each score in the array
    let scoretotal = score.length;
    for(let i = 0; i < scoretotal; i++){
         // Add the current score to the total
        sum += score[i];
        
    } 
    // Return the average score by dividing the total by the number of scores
    return sum / score.length;
}
// Call getAverage() function with myScores and store the result in myAverage
let myscoreaverage = getAverage(myScores);
console.log(`My average score was ${myscoreaverage.toFixed(2)}`);

let yourScoreAverage = getAverage(yourScores);
console.log(`Your average score was ${yourScoreAverage.toFixed(2)}`);


//student_average.js

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];


   for(let i = 0; i < students.length; i++) {
    let student = students[i];
    let totalscore = 0

    for(let j = 0; j < student.scores.length; j++){
        totalscore += student.scores[j];
    }

    let averagescore = totalscore / student.scores.length;
    console.log(`${student.name} average score is: ${averagescore.toFixed(2)}`);
}

