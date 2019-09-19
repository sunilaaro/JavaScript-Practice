const btnColor = document.querySelector('.btnColor');
const bodyBcg = document.querySelector('body');

//const color = ['yellow', 'red', 'blue', '#00ffb8'];

btnColor.addEventListener('click', changeColor);

function changeColor(){
    // let random = Math.floor(Math.random()*color.length);
    // bodyBcg.style.backgroundColor = color[random];

    let random = Math.floor(Math.random() * 0xFFFCC);
    bodyBcg.style.backgroundColor = '#'+random;
}
