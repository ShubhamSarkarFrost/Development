// const person = {
//     firstname: "Derrick",
//     lastname: "Jagger",
//     username: "Jagger666",
//     downvotes: 19,
//     upvotes: 1965
//
// };
//
// // access an elements method1 - through [] & method2 - object.searchobject
// console.log(person["lastname"]);
// console.log(person.lastname);
//
// // another way of accessing elements
// console.log(person["first"+"name"]);
//
// // Modifying elements
// const midterms = {daniella:96,thomas:78};
// midterms.daniella = 79;
// let cars = [
//     {
//         "color": "purple",
//         "type": "minivan",
//         "registration": new Date('2017-01-03'),
//         "capacity": 7
//     },
//     {
//         "color": "red",
//         "type": "station wagon",
//         "registration": new Date('2018-03-03'),
//         "capacity": 5
//     }
//     ];
//
// console.log(cars[1].capacity);

// Loops
// For Loops
// for(let i=0;i<10;i++){
//     for(let j=0; j<i; j++){
//         console.log("*")
//     }
//     console.log(" ")
// }

// Infinite Loop
// for(;;){
//     console.log("You'Re an Idiot !!")
// }

// looping over arrays
// students = ["Tom","Dick","Harry","Jammison"];
// for(let i =0 ; i<students.length; i++){
//     console.log(`Student ${students[i]} is at the index ${i}`)
// }

// nested loops
// for(let i = 0 ; i <10; i++){
//     console.log(`i is ${i}`)
//     for(let j = 1; j < 4; j++){
//         console.log(`j is ${j}`)
//     }
// }

// while loop
// let num = 0 ;
// while(num < 10){
//     console.log(`Value is ${num}`)
//     num ++;
// }

// break keyword
// let num = 0 ;
// while(num < 10){
//     console.log(`Value is ${num}`);
//     if(num === 5){
//         break;
//     }
//     num ++;
// }

// const animals_array = [
//     "Aardvark",
//     "Albatross",
//     "Alligator",
//     "Alpaca",
//     "Ant",
//     "Anteater",
//     "Antelope",
//     "Ape",
//     "Armadillo",
//     "Donkey",
//     "Baboon",
//     "Badger",
//     "Barracuda",
//     "Bat",
//     "Bear",
//     "Beaver",
//     "Bee",
//     "Bison",
//     "Boar",
//     "Buffalo",
//     "Butterfly",
//     "Camel",
//     "Capybara",
//     "Caribou",
//     "Cassowary",
//     "Cat",
//     "Caterpillar",
//     "Cattle",
//     "Chamois",
//     "Cheetah",
//     "Chicken",
//     "Chimpanzee",
//     "Chinchilla",
//     "Chough",
//     "Clam",
//     "Cobra",
//     "Cockroach",
//     "Cod",
//     "Cormorant",
//     "Coyote",
//     "Crab",
//     "Crane",
//     "Crocodile",
//     "Crow",
//     "Curlew",
//     "Deer"
//     ];
// for(const beast of animals_array){
//     console.log(beast);
// }

const lethality = {
    Aardvark:20,
    Albatross:14,
    Alligator:50,
    Alpaca:56,
    Ant:78,
    Anteater:56,
    Antelope:12
};
// for(let animal in lethality){
//     console.log(`${animal} lethality is ${lethality[animal]}`)
// }

let total = 0;
for(let score of Object.values(lethality)){
    total += score;
    console.log(total)
}