function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector('.change-color');
const valueOfCollor = document.querySelector('.color');
const body =  document.querySelector('body');

button.addEventListener('click', onCollorChange);

function onCollorChange(event){
 let color = getRandomHexColor();
 body.style.backgroundColor = color;
 valueOfCollor.textContent = color;
}