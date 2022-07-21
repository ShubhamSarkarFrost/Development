// const allImages = document.getElementsByTagName('img');
//
// for(let img of allImages){
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }
//
// const squareimg = document.getElementsByClassName('square');
// for(let img of squareimg){
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

// const links = document.querySelectorAll('p a');
//
// for (let link of links) {
//     console.log(link.href)
// }

// const links = document.querySelectorAll('a');
//
// for (let link of links) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

// Inner Text and Inner HTMl changes the content in the WebElement
// document.querySelector('h1').innerText = "Dinosaur";
// document.querySelector('h1').innerText = "Dinosaur2";
//
// // textContent gets the Current Content being displayed in the WebElement
// const header = document.querySelector('h1').textContent;
// console.log(header);

// id Property changes the id of the element
// document.querySelector('#banner').id = "#whoops";
// src to get the source attribute
// const banner_src = document.querySelector('#banner').src;
// console.log(banner_src);
// // to get the link of the anchor tag use href attribute
// console.log(document.querySelector('a').href);
// // to get the title of the attribute
// console.log(document.querySelector('a').title);
// // another way of getting attribute is using getattribute
// console.log(document.querySelector('a').getAttribute('title'));
// // to change the attribute use setattribute method
// document.querySelector('a').setAttribute('title','https://www.xvedios.com');
// to change the input tag attributes
// const input = document.querySelector('input[type="text"]');
// // input.type = "password";
// input.type = "color";

// change style of h1
// document.querySelector('h1').style.color = "purple";

// classlist to add more than one classes
// const headernew = document.querySelector('h2');
// // headernew.getAttribute('class');
// // headernew.setAttribute('class','purple');
// headernew.classList.add('purple');
// headernew.classList.add('border');
// function removeelem() {
//       setTimeout( () =>{
//           headernew.classList.remove('border');
//       },3000)
// }
// removeelem();
// console.log(headernew.classList.contains('border'));
// console.log(headernew.classList.toggle('purple'));

// const firstbold = document.querySelector('b');
// console.log(firstbold.parentElement.innerHTML);

// const CountChildElement = document.querySelector('p').childElementCount;
// console.log(CountChildElement);

// create a new Element
// const newimage = document.createElement('img');
// newimage.src = "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80";
// // append Child method
// document.body.appendChild(newimage);
// newimage.classList.add('square');
// // to remove an element
// document.body.removeChild(newimage);