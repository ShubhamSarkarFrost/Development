// this is an empty array
//let students = [];
// this is array of Strings
// function element_update(sentence,words,operate){
//     if(operate === "push"){
//         sentence.push(words);
//         for(i=0; i<sentence.length; i++){
//             console.log(sentence[i])
//         }
//     }else if(operate === "pop"){
//         sentence.pop();
//         for(i=0; i<sentence.length; i++){
//             console.log(sentence[i])
//         }
//     }else if(operate === "shift"){
//         sentence.shift();
//         for(i=0; i<sentence.length; i++){
//             console.log(sentence[i])
//         }
//     }else {
//         sentence.unshift(words);
//         for(i=0; i<sentence.length; i++){
//             console.log(sentence[i])
//         }
//     }
// }







let students = ["bob","jhon","dick","harry"];
// element_update(students,"panther","push");
// element_update(students,"panther","pop");
// element_update(students,"panther","shift");
// element_update(students,"panther","unshift");
// let stu_length = students.length;
//
// for(i=0 ; i<stu_length; i++){
//     alert(`Student of Number ${i+1} is ${students[i]} `)
// }
//
// // random assigning of a value
// students[3] = "Beckett";
// for(i=0 ; i<stu_length; i++){
//     alert(`Student of Number ${i+1} is ${students[i]} `)
// }
let Class = [5,6,7,8];
let students_class = students.concat(Class);
console.log(students_class);
console.log(students_class.includes(7));
console.log(students_class.indexOf(5));
console.log(students_class.join("Damien"));
console.log(students_class.reverse());
console.log(students_class.slice(2,4));
console.log(students_class.splice(2,4,"Margaret"));
console.log(students_class.sort());

const nested_array = [
    ['red','crimson'],
    ['orange','dark orange'],
    ['yellow', 'golden rod'],
    ['green', 'olive'],
    ['blue', 'navy blue'],
    ['purple', 'orchid']
];

// console.table(nested_array);
// loop the outer array
for (let i = 0; i < nested_array.length; i++) {
    // get the size of the inner array
    var innerArrayLength = nested_array[i].length;
    // loop the inner array
    for (let j = 0; j < nested_array; j++) {
        console.log('[' + i + ',' + j + '] = ' + nested_array[i][j]);
    }
}


