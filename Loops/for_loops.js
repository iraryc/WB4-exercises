"use strict"
// //this is a for loop
// let loop = "I love loops";
//  for (let i = 0; i < 7; i++) {
//     console.log(loop);
//  }

//  //this is a while loop
//  let i = 0;
//  while(i < 7) {
//     console.log("I love loops");
//     i++; 
//  }

//  let age = 15;
//  while(age < 18 ) {
//    console.log(`You are ${age} years old. That is not old enough`);
//    age++;
//    console.log(`Happy birthday, You are ${age} years old`);
//    if(age == 17) {
//      console.log(`Just one more year to go before you are 18`);
//    }
//  }

 let value = 10;
 while(value <= 10){
   console.log(`To infinity aaaaand: ${value}`);
   value--;
   if(value == 0) {
     
      break;
   }
 }
 console.log(`Beyoooond!`);

//Here is a do-while example:
let counter = 10;

do {
  console.log(`Countdown: ${counter}`);
  counter--; // decrement the counter by 1
} while (counter > 0);

console.log("Countdown: 0. Ready for launch");


// Array of movie objects
const movies = [
   { title: "The Shawshank Redemption", year: 1994 },
   { title: "The Godfather", year: 1972 },
   { title: "The Dark Knight", year: 2008 },
   { title: "12 Angry Men", year: 1957 },
   { title: "Schindler's List", year: 1993 },
   { title: "Pulp Fiction", year: 1994 }
 ];
 
 // Set up an index for while loop
 let index = 0;
 
 // Use a while loop to process the array

let amountOfMovies = movies.length;
console.log(`Movies: ${amountOfMovies}`);
 while (index < amountOfMovies) {
   const movie = movies[index];
   if (movie.year < 2000) { // Check if the movie was released before the year 2000
     console.log(`${movie.title} was released in ${movie.year}.`);
   }
   index++; // Increment index to move to the next movie
 }

 const books = [
   { title: "The Shawshank Redemption", author: "Ryan Reynolds", year: 1994 },
   { title: "The Godfather", author: "Anne Hathaway", year: 2013 },
   { title: "The Dark Knight", author: "Bad Bunny", year: 2008 },
   { title: "12 Angry Men", author: "Flume", year: 1957 },
   { title: "Schindler's List", author: "Kevin Hart", year: 2002 },
   { title: "Pulp Fiction", author: "The Rock", year: 2005 }
 ];

 let i=0;

let checkPublicationCentury = books.length;
while(i < checkPublicationCentury) {
   const book = books[i];
   if(book.year < 2000) {
      console.log(`${book.title} was not published in the 21st century`);
   } else {
      console.log(`${book.title} was published in the 21st century`);
   }
   i++;
}