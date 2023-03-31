function drawPacman(ctx, x, y, radius, startAngle, endAngle, fillStyle) {
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x, y, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
}

function drawPacmans() {
  const canvas = document.getElementById("drawPacmans");
  const ctx = canvas.getContext("2d");
  drawPacman(ctx, 50, 60, 50, 1.25 * Math.PI, 0.75 * Math.PI, "yellow");
  drawPacman(ctx, 200, 60, 50, 0.25 * Math.PI, 1.75 * Math.PI, "red");
  drawPacman(ctx, 350, 60, 50, 1.75 * Math.PI, 1.25 * Math.PI, "blue");
  drawPacman(ctx, 500, 60, 50, 0.75 * Math.PI, 0.25 * Math.PI, "green");
}
window.addEventListener("load", drawPacmans);

function drawFace(ctx, points, fillStyle) {
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0], points[i][1]);
  }
  ctx.closePath();
  ctx.fill();
}

function drawCube() {
  const canvas = document.getElementById("drawCube");
  const ctx = canvas.getContext("2d");
  drawFace(
    ctx,
    [
      [50, 100],
      [150, 100],
      [150, 200],
      [50, 200],
    ],
    "green"
  );
  drawFace(
    ctx,
    [
      [100, 50],
      [200, 50],
      [150, 100],
      [50, 100],
    ],
    "yellow"
  );
  drawFace(
    ctx,
    [
      [150, 100],
      [200, 50],
      [200, 150],
      [150, 200],
    ],
    "blue"
  );
}
window.addEventListener("load", drawCube);

function drawPlatform(ctx, x, y, width, height) {
  ctx.fillStyle = "purple";
  ctx.fillRect(x, y, width, 2);
  ctx.fillRect(x, y + height - 2, width, 2);
  ctx.beginPath();
  for (let i = 0; i < width; i += 4) {
    ctx.moveTo(x + i, y + 3);
    ctx.lineTo(x + i + 1, y + 4);
    ctx.lineTo(x + i + 1, y + 5);
    ctx.lineTo(x + i + 2, y + 6);
    ctx.lineTo(x + i + 3, y + 5);
    ctx.lineTo(x + i + 3, y + 5);
    ctx.lineTo(x + i + 4, y + 4);
  }
  ctx.fill();
}
function drawLadder(ctx, x, y) {
  ctx.fillStyle = "cyan";
  ctx.fillRect(x, y, 1, 23);
  ctx.fillRect(x + 4, y, 1, 23);

  for (let i = 0; i < 23; i += 4) {
    ctx.fillRect(x, y + i + 1, 4, 1);
  }
}
function drawSnake(ctx, x, y) {
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(x + 6, y);
  ctx.lineTo(x + 7, y);
  ctx.moveTo(x + 5, y + 1);
  ctx.lineTo(x + 8, y + 1);
  ctx.moveTo(x + 1, y + 2);
  ctx.lineTo(x + 1, y + 2);
  ctx.moveTo(x + 4, y + 2);
  ctx.lineTo(x + 8, y + 2);
  ctx.moveTo(x + 1, y + 3);
  ctx.lineTo(x + 1, y + 3);
  ctx.moveTo(x + 4, y + 3);
  ctx.lineTo(x + 8, y + 3);
  ctx.moveTo(x, y + 4);
  ctx.lineTo(x + 1, y + 4);
  ctx.moveTo(x + 4, y + 4);
  ctx.lineTo(x + 7, y + 4);
  ctx.moveTo(x + 1, y + 5);
  ctx.lineTo(x + 2, y + 5);
  ctx.moveTo(x + 4, y + 5);
  ctx.lineTo(x + 8, y + 5);
  ctx.moveTo(x + 1, y + 6);
  ctx.lineTo(x + 2, y + 6);
  ctx.moveTo(x + 4, y + 6);
  ctx.lineTo(x + 9, y + 6);
  ctx.moveTo(x + 2, y + 7);
  ctx.lineTo(x + 9, y + 7);
  ctx.moveTo(x + 2, y + 8);
  ctx.lineTo(x + 9, y + 8);
  ctx.moveTo(x + 3, y + 9);
  ctx.lineTo(x + 8, y + 9);
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(x + 6, y + 2);
  ctx.lineTo(x + 7, y + 2);
  ctx.stroke();
}
function drawDonkeyKong() {
  const canvas = document.getElementById("drawAtariGame");
  const ctx = canvas.getContext("2d");
  ctx.mozImageSmoothingEnabled = false;
  ctx.oImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.msImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  // Draw background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Draw platforms
  drawPlatform(ctx, 13, 181, 140, 8);
  drawPlatform(ctx, 18, 150, 100, 8);
  drawPlatform(ctx, 128, 150, 20, 8);
  drawPlatform(ctx, 23, 119, 15, 8);
  drawPlatform(ctx, 48, 119, 70, 8);
  drawPlatform(ctx, 128, 119, 15, 8);
  drawPlatform(ctx, 29, 88, 10, 8);
  drawPlatform(ctx, 49, 88, 90, 8);
  drawPlatform(ctx, 45, 49, 75, 8);
  // Draw ladders
  drawLadder(ctx, 18, 158);
  drawLadder(ctx, 56, 158);
  drawLadder(ctx, 104, 158);
  drawLadder(ctx, 142, 158);
  drawLadder(ctx, 23, 127);
  drawLadder(ctx, 77, 127);
  drawLadder(ctx, 136, 127);
  drawLadder(ctx, 29, 96);
  drawLadder(ctx, 50, 96);
  drawLadder(ctx, 109, 96);
  drawLadder(ctx, 131, 96);
  //Draw Wooden Bars
  ctx.fillStyle = "brown";
  ctx.fillRect(57, 57, 3, 31);
  ctx.fillRect(105, 57, 3, 31);
  // Draw Snakes
  drawSnake(ctx, 15, 171);
  drawSnake(ctx, 73, 171);
  drawSnake(ctx, 97, 171);
  // Draw Hammer
  ctx.fillStyle = "green";
  ctx.fillRect(12, 128, 8, 13);
  ctx.fillRect(76, 97, 8, 13);
  // Draw Mario
  ctx.fillStyle = "blue";
  ctx.fillRect(57, 73, 10, 15);
  // Draw Donkey Kong
  ctx.fillStyle = "brown";
  ctx.fillRect(70, 57, 25, 31);
  // Draw Text
  ctx.fillStyle = "white";
  ctx.font = "9px Arial";
  ctx.fillText("1 UP 83780", 6, 16);
  ctx.fillText("83100", 3, 39);
  ctx.fillText("5", 149, 16);
}
window.addEventListener("load", drawDonkeyKong);
