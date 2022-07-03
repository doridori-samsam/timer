/* 타임 셋 */
const timeBox = document.querySelectorAll('.box');

for(let i=0; i<timeBox.length; i++){
  timeBox[i].addEventListener('click', (e)=>{
    let time = parseInt(e.target.textContent);
    time++;
    e.target.textContent = time;
    if(time < 10){
      e.target.textContent = '0'+time;
    }
    if(time > 59){
      e.target.textContent = '00';
      if(timeBox[i-1].textContent < 9){
        timeBox[i-1].textContent = '0' + parseInt(parseInt(timeBox[i-1].textContent)+1);
        }
        else{
          timeBox[i-1].textContent = parseInt(parseInt(timeBox[i-1].textContent)+1);
        };
      }
    startBtn.disabled = false;
    startBtn.classList.add('abled');
    resetBtn.disabled = false;
    resetBtn.classList.add('abled');
  })

};


/* 타이머 구동 */
let isOn = false;

function countDown() {
  if(isOn){
  for(let i=0; i<timeBox.length-2; i++){
    console.log(timeBox[2].textContent);
    if(timeBox[2].textContent > 0){
      console.log('초 줄어듦...');
      if(timeBox[2].textContent <= 10){
        timeBox[2].textContent = '0' + parseInt(parseInt(timeBox[2].textContent)-1);
      }
      else{timeBox[2].textContent = parseInt(timeBox[2].textContent)-1;
      }
    }
    else if(timeBox[2].textContent === '00'){
      if(parseInt(timeBox[1].textContent) === 0){
        isOn = false;
        clearInterval(interval);
        console.log(isOn);
      }
      else if(timeBox[1].textContent <= 10){
        timeBox[1].textContent = '0' + parseInt(parseInt(timeBox[1].textContent)-1);}
        else if(timeBox[1].textContent > 10){
          timeBox[1].textContent = parseInt(parseInt(timeBox[1].textContent)-1);}
      
          timeBox[2].textContent = 59;
    }
  }
  }
};

let interval;


/* 버튼 클릭 이벤트 */
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const pauseBtn = document.getElementsByClassName('.pause');

resetBtn.addEventListener('click', ()=>{
  if(resetBtn.classList[0] === 'reset'){
    for(let nums of timeBox){
      nums.textContent = '00';
    }
      resetBtn.disabled = true;
      resetBtn.classList.remove('abled');
      startBtn.disabled = true;
      startBtn.classList.remove('abled');
  } else if(resetBtn.classList[0] === 'pause'){
      clearInterval(interval);
      isOn = null;
      console.log(isOn);
      startBtn.disabled = false;
      startBtn.classList.add('abled');
      resetBtn.classList.remove('pause')
      resetBtn.classList.add('reset');
      resetBtn.classList.add('abled');
  }
});


startBtn.addEventListener('click', ()=>{
  if(isOn === null){
    isOn = true;
    console.log(isOn);
    interval = setInterval(countDown, 300);
  }
  isOn = true;
  interval = setInterval(countDown, 300);
  resetBtn.classList.remove('reset');
  resetBtn.classList.add('pause');
  resetBtn.classList.remove('abled');
  startBtn.classList.remove('abled');
  startBtn.disabled = true;
  console.log('시작!');
})


