const btForest = document.querySelector("#bt-forest");
const btRain = document.querySelector("#bt-rain");
const btCofShop = document.querySelector("#bt-coffee-shop");
const btFireplace = document.querySelector("#bt-fireplace");

const sndForest = new Audio(
  "https://docs.google.com/uc?export=download&id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA"
);
const sndRain = new Audio(
  "https://docs.google.com/uc?export=download&id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2"
);
const sndCofShop = new Audio(
  "https://docs.google.com/uc?export=download&id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA"
);
const sndFireplace = new Audio(
  "https://docs.google.com/uc?export=download&id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB"
);

const sndTimerEnd = new Audio("audios/acabou-acabou-acabou-galvao-bueno.mp3");
const sndTimerCancel = new Audio("audios/houve-um-equivoco.mp3");

const btPlay = document.querySelector("#bt-play");
const btPause = document.querySelector("#bt-pause");

const btStop = document.querySelector("#bt-stop");
const btInc5 = document.querySelector("#bt-inc5");
const btDec5 = document.querySelector("#bt-dec5");

const spMinutes = document.querySelector("#display span:nth-child(1)");
const spSeconds = document.querySelector("#display span:nth-child(3)");

export {
  btForest,
  btRain,
  btCofShop,
  btFireplace,
  sndForest,
  sndRain,
  sndCofShop,
  sndFireplace,
  sndTimerEnd,
  sndTimerCancel,
  btPlay,
  btPause,
  btStop,
  btInc5,
  btDec5,
  spMinutes,
  spSeconds,
};
