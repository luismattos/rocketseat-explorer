const txtMin = document.querySelector("#timer span:nth-child(1)");

const txtSec = document.querySelector("#timer span:nth-child(3)");

const btPlay = document.querySelector("#bt-play");

const btPause = document.getElementById("bt-pause");

const btSet = document.querySelector("#bt-set");

const btStop = document.querySelector("#bt-stop");

const btSoundOn = document.querySelector("#bt-volume-on");

const btSoundOff = document.querySelector("#bt-volume-off");

const bgAudio = new Audio("assets/audios/lofi-jazz.mp3");
bgAudio.loop = true;
const btAudio = new Audio("assets/audios/perfect-fart-1.mp3");

let defaultMinutes = txtMin.textContent;

let myTimeout;

function setTimer(min, sec) {
  if (min < 10) {
    min = "0" + min;
  }
  txtMin.textContent = min;

  if (sec < 10) {
    sec = "0" + sec;
  }
  txtSec.textContent = sec;
}

function countdown() {
  let sec = Number(txtSec.textContent);
  let min = Number(txtMin.textContent);

  if (sec == 0 && min == 0) {
    setTimer(defaultMinutes, 0);
    btPlay.classList.remove("hidden");
    btPause.classList.add("hidden");
    btSet.classList.remove("hidden");
    btStop.classList.add("hidden");
    return;
  }

  if (sec == 0) {
    sec = 60;
    min--;
  }

  sec--;

  setTimer(min, sec);

  myTimeout = setTimeout(countdown, 1000);
}

btPlay.addEventListener("click", () => {
  btAudio.play();
  btPlay.classList.add("hidden");
  btPause.classList.remove("hidden");
  btSet.classList.add("hidden");
  btStop.classList.remove("hidden");
  setTimeout(countdown, 1000);
});

btPause.addEventListener("click", () => {
  btAudio.play();
  btPause.classList.add("hidden");
  btPlay.classList.remove("hidden");
  clearTimeout(myTimeout);
});

btStop.addEventListener("click", function () {
  btAudio.play();
  btStop.classList.add("hidden");
  btSet.classList.remove("hidden");
  btPause.classList.add("hidden");
  btPlay.classList.remove("hidden");
  clearTimeout(myTimeout);
  setTimer(defaultMinutes, 0);
});

btSet.addEventListener("click", function () {
  btAudio.play();
  tmp = prompt("Quantos minutos?");
  tmp <= 0 || tmp >= 100 ? null : (defaultMinutes = tmp);
  setTimer(defaultMinutes, 0);
});

btSoundOn.addEventListener("click", () => {
  btSoundOn.classList.add("hidden");
  btSoundOff.classList.remove("hidden");
  bgAudio.play();
});

btSoundOff.addEventListener("click", () => {
  btSoundOff.classList.add("hidden");
  btSoundOn.classList.remove("hidden");
  bgAudio.pause();
});
