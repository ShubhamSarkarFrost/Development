const header = document.querySelector('h1');
const buton = document.querySelector('button');

buton.addEventListener('click', function() {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    header.innerText = newColor;
});

const makeRandColor = () =>{
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};