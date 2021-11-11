
const btnStartRef = document.querySelector('button[data-start]')
const btnStopRef = document.querySelector('button[data-stop]');
let timerId = null;

btnStopRef.setAttribute('disabled','disabled');

btnStartRef.addEventListener("click", () => {
    timerId = setInterval(() => {document.body.style.background = getRandomHexColor()}, 1000);
    btnStartRef.setAttribute('disabled','disabled');
    btnStopRef.removeAttribute('disabled');
    
  });

btnStopRef.addEventListener("click", () => {
    clearInterval(timerId);
    btnStopRef.setAttribute('disabled','disabled');
    btnStartRef.removeAttribute('disabled');
  });

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  