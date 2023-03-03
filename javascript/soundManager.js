const dsSound = document.getElementsByClassName("ds")[0];
const dsOst = document.getElementById("ds-ost");

dsSound.addEventListener("mouseover", playDsSound);
dsSound.addEventListener("mouseout", stopDsSound);

function playDsSound() {
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
  persona4Ost.play();
}

function stopPersona4Sound() {
  persona4Ost.pause();
  persona4Ost.currentTime = 0;
}
