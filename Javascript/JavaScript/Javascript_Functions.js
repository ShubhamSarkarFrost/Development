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
const texts = ['rofl','lol','omg','ttyl'];
const caps = texts.map(function(t){
    return t.toUpperCase()
});

console.log(texts);
console.log(caps);