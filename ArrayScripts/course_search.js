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
   
//    actos.js
//    let academyMembers = [
//     {
//     memID: 101,
//     name: "Bob Brown",
//     films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
//     },
//     {
//     memID: 142,
//     name: "Sallie Smith",
//     films: ["A Good Day", "A Better Day"]
//     },
//     {
//     memID: 187,
//     name: "Fred Flanders",
//     films: ["Who is Fred?", "Where is Fred?",
//     "What is Fred?", "Why Fred?"]
//     },
//     {
//     memID: 203,
//     name: "Bobbie Boots",
//     films: ["Walking Boots", "Hiking Boots",
//     "Cowboy Boots"]
//     },
//    ];

//    for(let i = 0; i< academyMembers.length; i++){
//     if(academyMembers[i].memID === 187){
//         console.log(academyMembers[i].name);
//     }
//    }

//    let peopleWithThreeFilms = [];
//    for (let i = 0; i < academyMembers.length; i++) {
//      if (academyMembers[i].films.length >= 3) {
//        peopleWithThreeFilms.push(academyMembers[i].name);
//      }
//    }
//    console.log("People with at least three films:", peopleWithThreeFilms.join(", "));

//    let bobnames=[];
//    for(let i=0; i<academyMembers.length; i++){
//     if(academyMembers[i].name.startsWith("Bob")){
//         bobnames.push(academyMembers[i].name);
//     }
//    }

//    if(bobnames.length > 0){
//     console.log(bobnames.join(", "));
//    } else {
//     console.log("none");
//    }

//    let academyMemberA = []
//    for(let i=0; i <academyMembers.length; i++){
//     let films = academyMembers[i].films;
//     for(let j = 0; j <films.length; j++){
//         if(films[j][0] ==="A"){
//              academyMemberA.push(academyMembers[i].name);
//              break;   
//         }
//     }
//    }

//    if(academyMemberA.length > 0){
//     console.log(academyMemberA.join(", "));
//    } else {
//     console.log("None");
//    }



let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7
    },
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5
    }
   ];
   

   for(let i = 0; i < vehicles.length; i++) {
    if(vehicles[i].color === "Red"){
        console.log(vehicles[i].type);
    }
   }

   for(let i =0; i < vehicles.length; i++){
    if(vehicles[i].capacity >= 6){
        console.log(vehicles[i].type);
    }
   }

   for(let i = 0; i< vehicles.length; i++){
    if(vehicles[i].licenseNo.includes ("222")){
        console.log(vehicles[i].type);
    }
   }
  
















   // let favoriteMovies = [
//     "Memoirs of a Geisha",
//     "Training Day",
//     "Princess and the Frog",
//     "Spiderman",
//     "Deadpool",
//     "Avengers",
//     "Forrest Gump",
//     "The Help",
//     "Barefoot",
//     "The Conjuring",
//     "Cars",
//     "Grease",
//     "Wreck-It Ralph",
//     "Back to the Future",
//     "Spirited Away",
//     "The Shawshank Redemption",
//     "The Green Mile",
//     "Forrest Gump", // This duplicate will be removed
//     "Rollerball",
//     "Planet of the Apes",
//     "2001: A Space Odyssey",
//     "How To Train Your Dragon",
//     "Howl's Moving Castle",
//     "Ponyo",
//     "Catch Me If You Can",
//     "The Little Rascals",
//     "Scream",
//     "Shrek 2",
//     "Megamind",
//     "Shrek",
//     "The Interview",
//     "The Proposal",
//     "The Pursuit of Happyness",
//     "The Longest Yard",
//     "17 Again",
//     "Rush Hour",
//     "Athena",
//     "The Pianist",
//     "I feel Joker",
//     "The Godfather",
//     "The Mask",
//     "Pan's Labyrinth",
//     "Transformers",
//     "Shrek 4"
// ];

// //    function displayMovie(_movies){
// //        console.log(`My favorite 4 movies are ${_movies[3]},${_movies[2]}, ${_movies[1]} and ${_movies[0]} `)
// //     };

// //     displayMovie(favoritemovies);

// for(let i=0; i<favoriteMovies.length; i++){
//     console.log(`You should watch ${favoriteMovies[i]}`);
// }

// let myFavoriteMoviesList = [
//     {
//         title: "Shrek",
//         reason: "So funny",
//         picture: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"

//     },
//     {
//         title: "The Interview",
//         reason: "Good memories watching it with my little brother",
//         picture: "https://upload.wikimedia.org/wikipedia/en/2/27/The_Interview_2014_poster.jpg"

//     },
//     {
//         title: "The Princess Diaries",
//         reason: "Good memories watching it with my little sister and love Anne Hathaway <3",
//         picture: "https://lumiere-a.akamaihd.net/v1/images/p_theprincessdiaries_19875_2ef7e437.jpeg"
//     },
//     {
//         title: "The Proposal",
//         reason: "Love Sandra Bullock <3 and Ryan Reynolds <3!",
//         picture: "https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
//     }
// ]
// function randomMovie(){
//         let pickRandom = Math.floor(Math.random()*myFavoriteMoviesList.length)
//         let favoriteMovie = myFavoriteMoviesList[pickRandom]
//         console.log(favoriteMovie);
//     }

//     randomMovie(myFavoriteMoviesList);

//veichles.js// let favoriteMovies = [
//     "Memoirs of a Geisha",
//     "Training Day",
//     "Princess and the Frog",
//     "Spiderman",
//     "Deadpool",
//     "Avengers",
//     "Forrest Gump",
//     "The Help",
//     "Barefoot",
//     "The Conjuring",
//     "Cars",
//     "Grease",
//     "Wreck-It Ralph",
//     "Back to the Future",
//     "Spirited Away",
//     "The Shawshank Redemption",
//     "The Green Mile",
//     "Forrest Gump", // This duplicate will be removed
//     "Rollerball",
//     "Planet of the Apes",
//     "2001: A Space Odyssey",
//     "How To Train Your Dragon",
//     "Howl's Moving Castle",
//     "Ponyo",
//     "Catch Me If You Can",
//     "The Little Rascals",
//     "Scream",
//     "Shrek 2",
//     "Megamind",
//     "Shrek",
//     "The Interview",
//     "The Proposal",
//     "The Pursuit of Happyness",
//     "The Longest Yard",
//     "17 Again",
//     "Rush Hour",
//     "Athena",
//     "The Pianist",
//     "I feel Joker",
//     "The Godfather",
//     "The Mask",
//     "Pan's Labyrinth",
//     "Transformers",
//     "Shrek 4"
// ];

// //    function displayMovie(_movies){
// //        console.log(`My favorite 4 movies are ${_movies[3]},${_movies[2]}, ${_movies[1]} and ${_movies[0]} `)
// //     };

// //     displayMovie(favoritemovies);

// for(let i=0; i<favoriteMovies.length; i++){
//     console.log(`You should watch ${favoriteMovies[i]}`);
// }

// let myFavoriteMoviesList = [
//     {
//         title: "Shrek",
//         reason: "So funny",
//         picture: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"

//     },
//     {
//         title: "The Interview",
//         reason: "Good memories watching it with my little brother",
//         picture: "https://upload.wikimedia.org/wikipedia/en/2/27/The_Interview_2014_poster.jpg"

//     },
//     {
//         title: "The Princess Diaries",
//         reason: "Good memories watching it with my little sister and love Anne Hathaway <3",
//         picture: "https://lumiere-a.akamaihd.net/v1/images/p_theprincessdiaries_19875_2ef7e437.jpeg"
//     },
//     {
//         title: "The Proposal",
//         reason: "Love Sandra Bullock <3 and Ryan Reynolds <3!",
//         picture: "https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
//     }
// ]
// function randomMovie(){
//         let pickRandom = Math.floor(Math.random()*myFavoriteMoviesList.length)
//         let favoriteMovie = myFavoriteMoviesList[pickRandom]
//         console.log(favoriteMovie);
//     }

//     randomMovie(myFavoriteMoviesList);

//veichles.js