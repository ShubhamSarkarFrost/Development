
function odd_even(num){
    if(num % 2 === 0){
        prompt(`The Number is an Even Number ${num}`)
    }else{
        prompt(`The Number is an Odd Number ${num}`)
    }
}


let num = prompt("Hi User Please Enter a Number !!");
odd_even(num);