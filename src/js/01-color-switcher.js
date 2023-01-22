function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function bcgColor(){
document.body.style.backgroundColor = getRandomHexColor()
} 
const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
btnStart,addEventListener('click', onBtnClick)
function onBtnClick(e){
setInterval(bcgColor, 1000);
}
