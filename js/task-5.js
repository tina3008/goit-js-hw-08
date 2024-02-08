function getRandomHexColor() { 
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;    
}

const btn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color')
const body = document.querySelector('body')
let colorSet

const chngColor = (event) =>{
  colorSet = getRandomHexColor();
  body.style.backgroundColor = colorSet;
  spanColor.textContent = colorSet; 
  
}

btn.addEventListener("click", chngColor);

