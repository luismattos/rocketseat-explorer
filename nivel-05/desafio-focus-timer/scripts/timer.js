export default function ({
  btPlay,
  btPause,
  btStop,
  btInc5,
  btDec5,
  spMinutes,
  spSeconds,
  sndTimerEnd,
  sndTimerCancel,
}) {
  let defaultMin = Number(spMinutes.textContent);
  let timeOut;

  function setTimer(min, sec) {
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    spMinutes.textContent = min;
    spSeconds.textContent = sec;
  }

  function btPlayListener() {
    timeOut = setTimeout(() => {
      let sec = Number(spSeconds.textContent);
      let min = Number(spMinutes.textContent);

      if (sec == 0 && min == 0) {
        btPause.classList.add("hidden");
        btPlay.classList.remove("hidden");
        btInc5.classList.remove("disabled");
        btDec5.classList.remove("disabled");
        btStop.classList.add("disabled");
        sndTimerEnd.play();
        setTimer(defaultMin, 0);
        return;
      }
      if (sec == 0) {
        // sec = 60;
        sec = 3;
        min--;
      }
      sec--;
      setTimer(min, sec);
      btPlayListener();
    }, 1000);
  }

  btPlay.addEventListener("click", () => {
    btPlay.classList.add("hidden");
    btPause.classList.remove("hidden");
    btStop.classList.remove("disabled");
    btInc5.classList.add("disabled");
    btDec5.classList.add("disabled");
  });
  btPlay.addEventListener("click", btPlayListener);

  btPause.addEventListener("click", () => {
    btPlay.classList.remove("hidden");
    btPause.classList.add("hidden");
    clearTimeout(timeOut);
  });

  btStop.addEventListener("click", () => {
    clearTimeout(timeOut);
    sndTimerCancel.play();
    setTimer(defaultMin, 0);
    btPlay.classList.remove("hidden");
    btPause.classList.add("hidden");
    btInc5.classList.remove("disabled");
    btDec5.classList.remove("disabled");
    btStop.classList.add("disabled");
  });

  btInc5.addEventListener("click", () => {
    let min = Number(spMinutes.textContent);

    btDec5.classList.remove("disabled");

    if (min >= 55) return;

    if (min >= 50) {
      btInc5.classList.add("disabled");
    }

    min += 5;

    defaultMin = min;

    setTimer(defaultMin, 0);
  });

  btDec5.addEventListener("click", () => {
    let min = Number(spMinutes.textContent);

    btInc5.classList.remove("disabled");

    if (min <= 5) return;

    if (min <= 10) {
      btDec5.classList.add("disabled");
    }

    min -= 5;

    defaultMin = min;

    setTimer(defaultMin, 0);
  });
}
