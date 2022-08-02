const input = document.querySelector('input');
const h1 = document.querySelector('h1');
//Change event only occur when a user blurs the input
// input.addEventListener('change', function(e) {
//     console.log()
// })


// to Fire everyTime a User Inputs a data use input event .
input.addEventListener('input', function(e){
    console.log(e);
    h1.innerText = input.value;

})
