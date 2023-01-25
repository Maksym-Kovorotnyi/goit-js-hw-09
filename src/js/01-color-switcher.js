function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function bcgColor(){
document.body.style.backgroundColor = getRandomHexColor()
} 
let intervalId = null;
const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
btnStop.disabled = true;
btnStart.addEventListener('click', onBtnStartClick)

function onBtnStartClick(e) {
  btnStart.disabled = true;
  btnStop.disabled = false;
  intervalId = setInterval(bcgColor, 1000);
}

btnStop.addEventListener('click', onBtnStopClick)

function onBtnStopClick(e) {
  btnStart.disabled = false;
  btnStop.disabled = true;
 clearInterval(intervalId)
}