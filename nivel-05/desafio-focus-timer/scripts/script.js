import {
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
} from "./data.js";

import SndSlctr from "./sound-selector.js";

import Timer from "./timer.js";

const sndSlctr = SndSlctr({
  btForest,
  btRain,
  btCofShop,
  btFireplace,
  sndForest,
  sndRain,
  sndCofShop,
  sndFireplace,
});

const timer = Timer({
  btPlay,
  btPause,
  btStop,
  btInc5,
  btDec5,
  spMinutes,
  spSeconds,
  sndTimerEnd,
  sndTimerCancel,
});
