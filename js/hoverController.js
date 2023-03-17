const dsSound = document.getElementsByClassName("ds")[0];
const dsOst = document.getElementById("ds-ost");
const dsBackground = "images/background_ds.jpg";

dsSound.addEventListener("mouseover", playDsSound);
dsSound.addEventListener("mouseout", stopDsSound);

function playDsSound() {
  document.body.style.backgroundImage = "url(" + dsBackground + ")";
  dsOst.volume = 0.1;
  dsOst.play();
}

function stopDsSound() {
  document.body.style.backgroundImage = "var(--bg-color)";
  dsOst.pause();
  dsOst.currentTime = 0;
}

const tSound = document.getElementsByClassName("terraria")[0];
const tOst = document.getElementById("terraria-ost");
const tBackground = "images/background_terraria.jpg";

tSound.addEventListener("mouseover", playTSound);
tSound.addEventListener("mouseout", stopTSound);

function playTSound() {
  document.body.style.backgroundImage = "url(" + tBackground + ")";
  tOst.volume = 0.1;
  tOst.play();
}

function stopTSound() {
  document.body.style.backgroundImage = "var(--bg-color)";
  tOst.pause();
  tOst.currentTime = 0;
}

const b2Sound = document.getElementsByClassName("borderlands2")[0];
const b2Ost = document.getElementById("borderlands2-ost");
const b2Background = "images/background_bl2.jpg";

b2Sound.addEventListener("mouseover", playB2Sound);
b2Sound.addEventListener("mouseout", stopB2Sound);

function playB2Sound() {
  document.body.style.backgroundImage = "url(" + b2Background + ")";
  b2Ost.volume = 0.1;
  b2Ost.play();
}

function stopB2Sound() {
  document.body.style.backgroundImage = "var(--bg-color)";
  b2Ost.pause();
  b2Ost.currentTime = 0;
}

const isaacSound = document.getElementsByClassName("isaac")[0];
const isaacOst = document.getElementById("isaac-ost");
const isaacBackground = "images/background_isaac.jpg";

isaacSound.addEventListener("mouseover", playIsaacSound);
isaacSound.addEventListener("mouseout", stopIsaacSound);

function playIsaacSound() {
  document.body.style.backgroundImage = "url(" + isaacBackground + ")";
  isaacOst.volume = 0.1;
  isaacOst.play();
}

function stopIsaacSound() {
  document.body.style.backgroundImage = "var(--bg-color)";
  isaacOst.pause();
  isaacOst.currentTime = 0;
}

const persona4Sound = document.getElementsByClassName("persona4")[0];
const persona4Ost = document.getElementById("persona4-ost");
const persona4Background = "images/background_p4.jpg";

persona4Sound.addEventListener("mouseover", playPersona4Sound);
persona4Sound.addEventListener("mouseout", stopPersona4Sound);

function playPersona4Sound() {
  document.body.style.backgroundImage = "url(" + persona4Background + ")";
  persona4Ost.volume = 0.1;
  persona4Ost.play();
}

function stopPersona4Sound() {
  document.body.style.backgroundImage = "var(--bg-color)";
  persona4Ost.pause();
  persona4Ost.currentTime = 0;
}

const aqw3dSound = document.getElementsByClassName("aqw3d")[0];
const aqw3dOst = document.getElementById("aqw3d-ost");
const aqw3dBackground = "images/background_aq3d.jpg";

aqw3dSound.addEventListener("mouseover", playAqw3dSound);
aqw3dSound.addEventListener("mouseout", stopAqw3dSound);

function playAqw3dSound() {
  document.body.style.backgroundImage = "url(" + aqw3dBackground + ")";
  aqw3dOst.volume = 0.1;
  aqw3dOst.play();
}

function stopAqw3dSound() {
  document.body.style.backgroundImage = "var(--bg-color)";
  aqw3dOst.pause();
  aqw3dOst.currentTime = 0;
}

const kurtzpelSound = document.getElementsByClassName("kurtzpel")[0];
const kurtzpelOst = document.getElementById("kurtzpel-ost");
const kurtzpelBackground = "images/background_kurtzpel.jpg";

kurtzpelSound.addEventListener("mouseover", playKurtzpelSound);
kurtzpelSound.addEventListener("mouseout", stopKurtzpelSound);

function playKurtzpelSound() {
  document.body.style.backgroundImage = "url(" + kurtzpelBackground + ")";
  kurtzpelOst.volume = 0.1;
  kurtzpelOst.play();
}

function stopKurtzpelSound() {
  document.body.style.backgroundImage = "var(--bg-color)";
  kurtzpelOst.pause();
  kurtzpelOst.currentTime = 0;
}

const dmoSound = document.getElementsByClassName("dmo")[0];
const dmoOst = document.getElementById("dmo-ost");
const dmoBackground = "images/background_dmo.png";

dmoSound.addEventListener("mouseover", playDmoSound);
dmoSound.addEventListener("mouseout", stopDmoSound);

function playDmoSound() {
  document.body.style.backgroundImage = "url(" + dmoBackground + ")";
  dmoOst.volume = 0.1;
  dmoOst.play();
}

function stopDmoSound() {
  document.body.style.backgroundImage = "var(--bg-color)";
  dmoOst.pause();
  dmoOst.currentTime = 0;
}