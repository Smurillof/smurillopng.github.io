function playSound(sound, ost, background) {
  const soundElement = document.querySelector(`.${sound}`);
  const ostElement = document.getElementById(ost);
  const backgroundUrl = `url(${background})`;
  const bgColor = getComputedStyle(document.body).getPropertyValue('--bg-color');

  soundElement.addEventListener("mouseover", () => {
    document.body.style.backgroundImage = backgroundUrl;
    ostElement.volume = 0.1;
    ostElement.play();
  });

  soundElement.addEventListener("mouseout", () => {
    document.body.style.backgroundImage = bgColor;
    ostElement.pause();
    ostElement.currentTime = 0;
  });
}

playSound("ds", "ds-ost", "images/background_ds.jpg");
playSound("terraria", "terraria-ost", "images/background_terraria.jpg");
playSound("borderlands2", "borderlands2-ost", "images/background_bl2.jpg");
playSound("isaac", "isaac-ost", "images/background_isaac.jpg");
playSound("persona4", "persona4-ost", "images/background_p4.jpg");
playSound("aqw3d", "aqw3d-ost", "images/background_aq3d.jpg");
playSound("kurtzpel", "kurtzpel-ost", "images/background_kurtzpel.jpg");
playSound("dmo", "dmo-ost", "images/background_dmo.png");