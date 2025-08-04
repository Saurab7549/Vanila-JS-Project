const count = document.querySelector('.container');
const colors = ['#9be8a7','#F7F7F7','#1B1B1F','#285b3a'];
let count_square = 365;

for(let i=0; i<365; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = randColor(colors);
    count.appendChild(square);
}

function randColor(colors){
    return colors[Math.floor(Math.random()*colors.length)]
}
