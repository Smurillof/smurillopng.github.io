const dsSound = document.getElementsByClassName("ds")[0];
const dsOst = document.getElementById("ds-ost");

dsSound.addEventListener("mouseover", playDsSound);
dsSound.addEventListener("mouseout", stopDsSound);

function playDsSound() {
  dsOst.volume = 0.1;
  dsOst.play();
}

function stopDsSound() {
  dsOst.pause();
  dsOst.currentTime = 0;
}

const tSound = document.getElementsByClassName("terraria")[0];
const tOst = document.getElementById("terraria-ost");

tSound.addEventListener("mouseover", playTSound);
tSound.addEventListener("mouseout", stopTSound);

function playTSound() {
  tOst.volume = 0.1;
  tOst.play();
}

function stopTSound() {
  tOst.pause();
  tOst.currentTime = 0;
}

const b2Sound = document.getElementsByClassName("borderlands2")[0];
const b2Ost = document.getElementById("borderlands2-ost");

b2Sound.addEventListener("mouseover", playB2Sound);
b2Sound.addEventListener("mouseout", stopB2Sound);

function playB2Sound() {
  b2Ost.volume = 0.1;
  b2Ost.play();
}

function stopB2Sound() {
  b2Ost.pause();
  b2Ost.currentTime = 0;
}

const isaacSound = document.getElementsByClassName("isaac")[0];
const isaacOst = document.getElementById("isaac-ost");

isaacSound.addEventListener("mouseover", playIsaacSound);
isaacSound.addEventListener("mouseout", stopIsaacSound);

function playIsaacSound() {
  isaacOst.volume = 0.1;
  isaacOst.play();
}

function stopIsaacSound() {
  isaacOst.pause();
  isaacOst.currentTime = 0;
}

const persona4Sound = document.getElementsByClassName("persona4")[0];
const persona4Ost = document.getElementById("persona4-ost");

persona4Sound.addEventListener("mouseover", playPersona4Sound);
persona4Sound.addEventListener("mouseout", stopPersona4Sound);

function playPersona4Sound() {
  persona4Ost.volume = 0.1;
  persona4Ost.play();
}

function stopPersona4Sound() {
  persona4Ost.pause();
  persona4Ost.currentTime = 0;
}

const aqw3dSound = document.getElementsByClassName("aqw3d")[0];
const aqw3dOst = document.getElementById("aqw3d-ost");

aqw3dSound.addEventListener("mouseover", playAqw3dSound);
aqw3dSound.addEventListener("mouseout", stopAqw3dSound);

function playAqw3dSound() {
  aqw3dOst.volume = 0.1;
  aqw3dOst.play();
}

function stopAqw3dSound() {
  aqw3dOst.pause();
  aqw3dOst.currentTime = 0;
}

const kurtzpelSound = document.getElementsByClassName("kurtzpel")[0];
const kurtzpelOst = document.getElementById("kurtzpel-ost");

kurtzpelSound.addEventListener("mouseover", playKurtzpelSound);
kurtzpelSound.addEventListener("mouseout", stopKurtzpelSound);

function playKurtzpelSound() {
  kurtzpelOst.volume = 0.1;
  kurtzpelOst.play();
}

function stopKurtzpelSound() {
  kurtzpelOst.pause();
  kurtzpelOst.currentTime = 0;
}

const dmoSound = document.getElementsByClassName("dmo")[0];
const dmoOst = document.getElementById("dmo-ost");

dmoSound.addEventListener("mouseover", playDmoSound);
dmoSound.addEventListener("mouseout", stopDmoSound);

function playDmoSound() {
  dmoOst.volume = 0.1;
  dmoOst.play();
}

function stopDmoSound() {
  dmoOst.pause();
  dmoOst.currentTime = 0;
}