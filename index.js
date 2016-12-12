document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('startTimer');
  const stopButton = document.getElementById('stopTimer');
  const timer = document.getElementById('timer');
  const form = document.getElementById('timerForm');
  const input = document.getElementById('timerInput')

  let timerDuration;

  function startTimer(duration){
    window.timerInterval = setInterval(()=>{
      console.log('fired')
      duration -= 1;
      timer.innerHTML = duration},1000)
  }

  function stopTimer(interval){
    console.log(interval)
    window.clearInterval(interval);
    return;
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = +input.value;
    console.log(val);
  })
  button.addEventListener('click', (e) => {
    console.log('button clicked');
    startTimer(15)
  })

  stopButton.addEventListener('click', (e) => {
    stopTimer(window.timerInterval);
  })
});
