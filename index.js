document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('startTimer');
  const stopButton = document.getElementById('stopTimer');
  const timer = document.getElementById('timer');
  let timerDuration;

  function padWithZeroes(timerObj){
    for (let time in timerObj){
      if (timerObj[time].toString().length === 1){
        timerObj[time] = '0' + timerObj[time];
      }
    }
    return timerObj;
  }
  function isTimerOver(timerObj){
    if (Object.keys(timerObj).every((time) => timerObj[time] === '00')){
      stopTimer(window.timerInterval);
      timer.classList.add('done');
    }
  }
  function startTimer(){
    window.timerInterval = setInterval(()=>{
      if (timerDuration.sec === '00' || timerDuration.sec == '01' ){
        isTimerOver(timerDuration);
        timerDuration.sec = '59';
        if (timerDuration.min == '00' && timerDuration.hour > 0){
            timerDuration.min = '59';
            timerDuration.hour -= 1;
        } else {
          timerDuration.min -= 1;
        }
      } else {
        timerDuration.sec -= 1;
      }
      padWithZeroes(timerDuration);
      document.getElementById('second').innerHTML = timerDuration.sec;
      document.getElementById('minute').innerHTML = timerDuration.min;
      document.getElementById('hour').innerHTML = timerDuration.hour;
    },900)
  }

  function stopTimer(interval){
    return window.clearInterval(interval);
  }

  function convertTime(time){
    time = time.includes('.') ? `00${time}` : time;
    const [hour = '00', min = '00'] = time.split('.');
    return { hour, min, sec: '00' };
  }

  button.addEventListener('click', (e) => {
    startTimer();
  })

  stopButton.addEventListener('click', (e) => {
    stopTimer(window.timerInterval);
  })

  document.getElementsByClassName('navbar')[0].addEventListener('click', (e) => {
    if (!e.srcElement.getAttribute('data-time')) return;
    const duration = e.srcElement.getAttribute('data-time');
    const time = duration.includes('m') ?
    `.${duration.replace(/[^0-9]/g,'')}` : `${duration.replace(/[^0-9]/g,'')}`;
    timerDuration = convertTime(time);
    Object.keys(timerDuration).forEach((el,i) => document.getElementsByClassName('time')[i].innerHTML = timerDuration[el]);
    })

});
