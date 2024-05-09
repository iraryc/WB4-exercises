"use strict"
// //course_search.js
// let courses = [
//     {
//     CourseId: "PROG100",
//     Title: "Introduction to HTML/CSS/Git",
//     Location: "Classroom 7",
//     StartDate: "09/08/22",
//     Fee: "100.00",
//     },
//     {
//     CourseId: "PROG200",
//     Title: "Introduction to JavaScript",
//     Location: "Classroom 9",
//     StartDate: "11/22/22",
//     Fee: "350.00",
//     },
//     {
//     CourseId: "PROG300",
//     Title: "Introduction to Java",
//     Location: "Classroom 1",
//     StartDate: "01/09/23",
//     Fee: "50.00",
//     },
//     {
//     CourseId: "PROG400",
//     Title: "Introduction to SQL and Databases",
//     Location: "Classroom 7",
//     StartDate: "03/16/23",
//     Fee: "50.00",
//     },
//     {
//     CourseId: "PROJ500",
//     Title: "Introduction to Angular",
//     Location: "Classroom 1",
//     StartDate: "04/25/23",
//     Fee: "50.00",
//     }
//    ];

// let Progstartdate;
// for(let i = 0; i < courses.length; i++) {
//     if(courses[i].CourseId === "PROG200") {
//         Progstartdate = courses[i].StartDate;
//         break;
//     }
// }
// console.log(Progstartdate);

// let Projtitle; 
// for(let i = 0; i < courses.length; i++){
//     if(courses[i].CourseId === "PROJ500") {
//         Projtitle = courses[i].Title;
//         break;
//     }
// }
// console.log(Projtitle);

// let costofCourse;
// for(let i = 0; i < courses.length; i++){
//     if(parseFloat(courses[i].Fee) <= 50.00){
//         console.log(courses[i].Title);
//     }
// }

// let classroom1;
// for(let i=0; i<courses.length; i++) {
//     if(courses[i].Location === "Classroom 1" ){
//         console.log(courses[i].Title);
//     }
// }

// cheap_candy.js
// let products = [
//     {product: "Gummy Worms", price: 5.79},
//     {product: "Plain M&Ms", price: 2.89},
//     {product: "Peanut M&Ms", price: 2.89},
//     {product: "Swedish Fish", price: 3.79},
//     {product: "Hersheys Bar", price: 1.79},
//     {product: "Hot Cheetos", price: 4.79},
//     {product: "Pringles", price: 2.79},
//     {product: "Kit Kat", price: 3.79},
//     {product: "Twix", price: 4.79},
//     {product: "Oreos", price: 5.79}
//     // TODO: fill the array with 10 candies of various
//     // price ranges
//    ];

  
//    for(let i=0; i < products.length; i++){
//     if(products[i].price <= 4.00){
//        console.log(products[i].product);
//     }
//    }

//    for(let i=0; i<products.length; i++){
//     if(products[i].product.includes( "M&Ms")){
//         console.log(products[i].product);
//     }
//    }

//    for(let i=0; i<products.length; i++){
//     if(products[i].product.includes("Swedish Fish")){
//         console.log(`We have ${products[i].product} in stock`);
//         }
//    }
   
   //actos.js
   let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

   for(let i = 0; i< academyMembers.length; i++){
    if(academyMembers[i].memID === 187){
        console.log(academyMembers[i].name);
    }
   }

   let peopleWithThreeFilms = [];
   for (let i = 0; i < academyMembers.length; i++) {
     if (academyMembers[i].films.length >= 3) {
       peopleWithThreeFilms.push(academyMembers[i].name);
     }
   }
   console.log("People with at least three films:", peopleWithThreeFilms.join(", "));

   let bobnames=[];
   for(let i=0; i<academyMembers.length; i++){
    if(academyMembers[i].name.startsWith("Bob")){
        bobnames.push(academyMembers[i].name);
    }
   }

   if(bobnames.length > 0){
    console.log(bobnames.join(", "));
   } else {
    console.log("none");
   }

   let academyMemberA = []
   for(let i=0; i <academyMembers.length; i++){
    let films = academyMembers[i].films;
    for(let j = 0; j <films.length; j++){
        if(films[j][0] ==="A"){
             academyMemberA.push(academyMembers[i].name);
             break;   
        }
    }
   }

   if(academyMemberA.length > 0){
    console.log(academyMemberA.join(", "));
   } else {
    console.log("None");
   }