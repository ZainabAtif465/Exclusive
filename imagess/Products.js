const timer = document.getElementById('timer');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let time = 3 * 24 * 60 * 60 + 23 * 60 * 60 + 19 * 60 + 56; 

setInterval(function() {
  time--;
  const d = Math.floor(time / (24 * 60 * 60));
  const h = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const m = Math.floor((time % (60 * 60)) / 60);
  const s = time % 60
  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}, 1000);