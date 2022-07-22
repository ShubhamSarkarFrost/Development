const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("You Have Clicked the Element !!");
    console.log("Hope it has Worked , now STOP!!");
};

const Scream = function(){
    console.log("AAAAAAAH");
    console.log("Stop Touching Me!!!");
};

btn.onmouseenter = Scream;

document.querySelector('h1').onclick = () =>{
  alert("You have Slicked me!!");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener('click', function () {
   alert("You Clicked me As - Hole!!")
});

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');
tasButton.addEventListener('click',twist);
tasButton.addEventListener('click',shout);