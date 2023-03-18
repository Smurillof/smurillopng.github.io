function playSound(sound, ost, background) {
  const soundElement = document.querySelector(`.${sound}`);
  const ostElement = document.getElementById(ost);

  soundElement.addEventListener("mouseover", () => {
    ostElement.volume = 0.1;
    ostElement.play();
  });

  soundElement.addEventListener("mouseout", () => {
    ostElement.pause();
    ostElement.currentTime = 0;
  });
}

playSound("ds", "ds-ost");
playSound("terraria", "terraria-ost");
playSound("borderlands2", "borderlands2-ost");
playSound("isaac", "isaac-ost");
playSound("persona4", "persona4-ost");
playSound("aqw3d", "aqw3d-ost");
playSound("kurtzpel", "kurtzpel-ost");
playSound("dmo", "dmo-ost");