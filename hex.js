const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const looper = document.querySelector('.looper');
btn.addEventListener('click', function(){
    let hexColor='#'; //const would give you error

    //loop run 6 times to get hex (6 values) 
    for(let i = 0; i<6; i++){
    //looper.textContent=hexColor
    hexColor+= hex[getRandomNumber()];
    console.log(hexColor);
        }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    }
);

function getRandomNumber(){
    const newLocal = hex.length;
    return Math.floor(Math.random()*newLocal)
};