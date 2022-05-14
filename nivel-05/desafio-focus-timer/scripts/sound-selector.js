export default function ({
  btForest,
  btRain,
  btCofShop,
  btFireplace,
  sndForest,
  sndRain,
  sndCofShop,
  sndFireplace,
}) {
  function removeAllActive() {
    btForest.classList.remove("active");
    btRain.classList.remove("active");
    btCofShop.classList.remove("active");
    btFireplace.classList.remove("active");
  }

  function stopAllSounds() {
    sndForest.pause();
    sndRain.pause();
    sndCofShop.pause();
    sndFireplace.pause();
  }

  function setListener(btn, snd) {
    if (!btn.classList.contains("active")) {
      removeAllActive();
      stopAllSounds();
      btn.classList.add("active");
      snd.play();
    } else {
      removeAllActive();
      stopAllSounds();
    }
  }

  sndForest.loop = true;
  sndRain.loop = true;
  sndCofShop.loop = true;
  sndFireplace.loop = true;

  btForest.addEventListener("click", () => setListener(btForest, sndForest));
  btRain.addEventListener("click", () => setListener(btRain, sndRain));
  btCofShop.addEventListener("click", () => setListener(btCofShop, sndCofShop));
  btFireplace.addEventListener("click", () =>
    setListener(btFireplace, sndFireplace)
  );
}
