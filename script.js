let button = document.getElementById("btn");
let body = document.getElementById("body");
let colors = '';
let coloured = document.getElementById('coloured');

document.body.style.backgroundColor = 'violet';

function getRandomColor(){
  colors = "#" + Math.floor(Math.random()*600000)
  return colors;
}

button.addEventListener('click',changeB)

function changeB(){
const randColors = getRandomColor();
document.body.style.backgroundColor = randColors;
coloured.value = randColors;
}
