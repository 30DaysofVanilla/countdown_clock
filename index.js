document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('startTimer');
  const stopButton = document.getElementById('stopTimer');
  const timer = document.getElementById('timer');
  const form = document.getElementById('timerForm');
  const input = document.getElementById('timerInput');
  let timerDuration;

  function startTimer(){
    window.timerInterval = setInterval(()=>{
      if (timerDuration !== 0){
        timerDuration -= 1;
        timer.innerHTML = timerDuration
      } else {
        stopTimer(window.timerInterval);
      }
    },1000)
  }

  function stopTimer(interval){
    return window.clearInterval(interval);
  }
  //convert 1, 2, .15 ---> 01:00:00, 02:00:00, 00:15:00,
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
    console.log('convertTime evaluates to', convertTime(time));
    })

});
