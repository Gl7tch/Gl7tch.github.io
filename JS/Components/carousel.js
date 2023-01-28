const buttonRigth = document.querySelector('.arrowRigth');
const buttonLeft = document.querySelector('.arrowLeft');
const items = document.querySelector('.items');
let pixels = 10

buttonRigth.addEventListener('click', function(){
    pixels = pixels + 400;
    items.style = `transform: translateX(${pixels}px)`;
} )

buttonLeft.addEventListener('click', function(){
    pixels = pixels - 400;
    items.style = `transform: translateX(${pixels}px)`;
} )