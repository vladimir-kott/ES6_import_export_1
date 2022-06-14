import getRandomColor from './utils/utils'

function applyColor(){
    document.body.style.backgroundColor = getRandomColor()
}

export default function initApp() {
    console.log("Hello world");
    document.body.innerHTML = '<button id="button" class="button">Изменить цвет страницы</button>';
    document.getElementById('button').addEventListener("click", applyColor)
}