document.querySelector('button').addEventListener('click', function(evt){
    console.log(evt);
});

// const input = document.querySelector('input');
// input.addEventListener('keydown',function(e){
//    console.log(e.key); // same output as e.code
//    console.log(e.code);
// });

window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("Arrow Up !!");
            break;
        case 'ArrowDown':
            console.log("Arrow Down!!");
            break;
        case 'ArrowLeft':
            console.log("Arrow Left!!");
            break;
        default:
            console.log("Arrow Right!!");
    }
});