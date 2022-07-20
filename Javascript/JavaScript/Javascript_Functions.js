//******************** Functions without arguements *******************************
// function singSong(){
//     console.log('**DO**');
//     console.log('**RE**');
//     console.log('**ME**');
// }
//
// // call singSong
// singSong();

// ********************Functions with arguements *******************************
// function sum(a,b) {
//     sum = 0;
//     sum = sum + a + b;
//     return sum
//
// }
//
// const total = sum(45,29);
// console.log(total);

//****************** Scope of a Functions ***************************************
// let bird = "Scarlet Macaw";
// function birdWatch(){
//     bird = "Blue Kingfisher";
//     console.log(bird);
// }
// console.log(bird);
// birdWatch();

// ***************** Function Expressions ***************************************
// const square = function(num){
//     return num * num;
// };
// console.log(square(7));

//******************** Higher Order Functions ************************************
// function callTwice(func){
//     func();
//     func();
// }
//
// function rollDie(){
//     const roll = Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }
// callTwice(rollDie);
//**************************** Methods *****************************************
// const math = {
//     multiply : function (x,y) {
//         return x * y ;
//     },
//     divide : function(x,y){
//         return x / y;
//     },
//     substract : function(x,y){
//         return x - y ;
//     },
//     addition : function(x,y){
//         return x + y;
//     }
// };
//
// console.log(math.addition(6,5));

//************************ This Keyword ****************************************
// const cat = {
//     firstName : "Tiger",
//     lastName : "Simba",
//     breed : "scottish fold",
//     meou_data(){
//        console.log(`My Meou Cat is a ${this.breed} and his full name is ${this.firstName +" "+ this.lastName}`)
//     }
// };
//
// cat.meou_data();

// ********************* Try-Catch ********************************************
// try{
//     hello.toUpperCase();
// }catch{
//     console.log("ERROR!!!")
//
// }
// hello.toUpperCase();
//
// console.log("AFTER !!!");

// ********************* For-Each ********************************************
// const nums = [9,8,7,6,5,4,3,2,1];
// //
// // nums.forEach(function(n){
// //    console.log(n);
// // });
// //
// // nums.forEach(function(el){
// //    if(el % 2 === 0){
// //        console.log(el);
// //    }
// // });

// **************************Map******************************************
// const texts = ['rofl','lol','omg','ttyl'];
// const caps = texts.map(function(t){
//     return t.toUpperCase()
// });
//
// console.log(texts);
// console.log(caps);

// ********************** Arrow Function ******************************** - No Internet Explorer support
// const mathoperation = {
//     square: (x) =>{
//         return x * x;
//     },
//     cube: (x) =>{
//         return x * x * x;
//     },
//     add : (x,y) =>{
//         return x + y ;
//     }
//
// };
//
// console.log(mathoperation.square(4));
// console.log(mathoperation.cube(4));
//******************* Arrow Function with Implicit Returns ***************************************
//******************** Only use when there is no parameters in the function
// const rollDice =() =>(
//     Math.floor(Math.random() * 6) + 1
// );
//
// console.log(rollDice());

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ];
//
// const newMovies = movies.map(movies =>(
//    `${movies.title} - ${movies.score / 10}`
// ));
//
// console.log(newMovies);

// setTimeout
// console.log("***** Hello ******");
// setTimeout(() =>{
//     console.log("...are you still there?")
// },3000);
// console.log("*****GoodBye******");

//setInterval
// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// const numbers = [100,111,112,113,114,115,116,118];
// const evens = numbers.filter( evennum =>{
//     return evennum % 2 === 0
// });
//
// console.log(evens);

//******** Filter method exercise **************
// validUserNames = ['mark','staceysmom1978','q29832128238983','carrie98','MoanaFan'];
// const validusers = validUserNames.filter(users =>{
//       return users.length < 10;
// });
//
// console.log(validusers);

// const words = ['DOG','DIG','LOG','BAG','WAG'];

// const threeletterword = words.some(word =>{
//    return word.length === 3;
// });

// const startletterD = words.every(word =>{
//     return word[0] === 'd'
// });

// const allEvens = [1,2,4,6,56,78,23];
//
// const checkallEven = allEvens.every(num =>{
//     return num % 2 === 0;
// });
//
// console.log(checkallEven);

//*************************** Reduce *********************************************8
const total = prices.reduce((total, price) => total + price)

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
];

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
});


// We can provide an initial value as the 2nd arg to reduce:
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num); //20
evens.reduce((sum, num) => sum + num, 100); //120

//********************** This in Arrow Function ******************************88
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
};