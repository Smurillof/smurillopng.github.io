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

  for (const point of points) {
    ctx.lineTo(point[0], point[1]);
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
function drawHammer(ctx, x, y) {
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(x + 4, y);
  ctx.lineTo(x + 6, y);
  ctx.moveTo(x + 4, y + 7);
  ctx.lineTo(x + 6, y + 7);
  ctx.moveTo(x + 4, y + 8);
  ctx.lineTo(x + 6, y + 8);
  ctx.moveTo(x + 4, y + 9);
  ctx.lineTo(x + 6, y + 9);
  ctx.moveTo(x + 4, y + 10);
  ctx.lineTo(x + 6, y + 10);
  ctx.moveTo(x + 4, y + 11);
  ctx.lineTo(x + 6, y + 11);
  ctx.moveTo(x + 4, y + 12);
  ctx.lineTo(x + 6, y + 12);
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = "lightgreen";
  ctx.beginPath();
  ctx.moveTo(x + 2, y + 1);
  ctx.lineTo(x + 8, y + 1);
  ctx.moveTo(x + 1, y + 2);
  ctx.lineTo(x + 9, y + 2);
  ctx.moveTo(x + 1, y + 3);
  ctx.lineTo(x + 9, y + 3);
  ctx.moveTo(x + 1, y + 4);
  ctx.lineTo(x + 9, y + 4);
  ctx.moveTo(x + 1, y + 5);
  ctx.lineTo(x + 9, y + 5);
  ctx.moveTo(x + 2, y + 6);
  ctx.lineTo(x + 8, y + 6);
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(x + 5, y + 1);
  ctx.lineTo(x + 8, y + 1);
  ctx.moveTo(x + 5, y + 2);
  ctx.lineTo(x + 9, y + 2);
  ctx.moveTo(x + 5, y + 3);
  ctx.lineTo(x + 9, y + 3);
  ctx.moveTo(x + 5, y + 4);
  ctx.lineTo(x + 9, y + 4);
  ctx.moveTo(x + 5, y + 5);
  ctx.lineTo(x + 9, y + 5);
  ctx.moveTo(x + 5, y + 6);
  ctx.lineTo(x + 8, y + 6);
  ctx.stroke();
  ctx.fill();
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
function drawMario(ctx, x, y) {
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(x + 2, y);
  ctx.lineTo(x + 4, y);
  ctx.moveTo(x + 2, y + 1);
  ctx.lineTo(x + 7, y + 1);
  ctx.moveTo(x + 3, y + 9);
  ctx.lineTo(x + 4, y + 9);
  ctx.moveTo(x + 5, y + 9);
  ctx.lineTo(x + 6, y + 9);
  ctx.moveTo(x + 2, y + 10);
  ctx.lineTo(x + 7, y + 10);
  ctx.moveTo(x + 2, y + 11);
  ctx.lineTo(x + 7, y + 11);
  ctx.moveTo(x + 2, y + 12);
  ctx.lineTo(x + 7, y + 12);
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(x + 2, y + 2);
  ctx.lineTo(x + 4, y + 2);
  ctx.moveTo(x + 1, y + 3);
  ctx.lineTo(x + 2, y + 3);
  ctx.moveTo(x + 3, y + 3);
  ctx.lineTo(x + 4, y + 3);
  ctx.moveTo(x + 1, y + 4);
  ctx.lineTo(x + 2, y + 4);
  ctx.moveTo(x + 3, y + 4);
  ctx.lineTo(x + 4, y + 4);
  ctx.moveTo(x + 1, y + 5);
  ctx.lineTo(x + 3, y + 5);
  ctx.moveTo(x + 6, y + 5);
  ctx.lineTo(x + 7, y + 5);
  ctx.moveTo(x + 3, y + 7);
  ctx.lineTo(x + 6, y + 7);
  ctx.moveTo(x + 2, y + 8);
  ctx.lineTo(x + 7, y + 8);
  ctx.moveTo(x + 2, y + 9);
  ctx.lineTo(x + 3, y + 9);
  ctx.moveTo(x + 6, y + 9);
  ctx.lineTo(x + 7, y + 9);
  ctx.moveTo(x + 8, y + 10);
  ctx.lineTo(x + 9, y + 10);
  ctx.moveTo(x + 7, y + 11);
  ctx.lineTo(x + 9, y + 11);
  ctx.moveTo(x + 1, y + 12);
  ctx.lineTo(x + 2, y + 12);
  ctx.moveTo(x + 7, y + 12);
  ctx.lineTo(x + 9, y + 12);
  ctx.moveTo(x + 1, y + 13);
  ctx.lineTo(x + 3, y + 13);
  ctx.moveTo(x + 7, y + 13);
  ctx.lineTo(x + 9, y + 13);
  ctx.moveTo(x + 1, y + 14);
  ctx.lineTo(x + 3, y + 14);
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(x + 4, y + 2);
  ctx.lineTo(x + 6, y + 2);
  ctx.moveTo(x + 2, y + 3);
  ctx.lineTo(x + 3, y + 3);
  ctx.moveTo(x + 4, y + 3);
  ctx.lineTo(x + 8, y + 3);
  ctx.moveTo(x + 2, y + 4);
  ctx.lineTo(x + 3, y + 4);
  ctx.moveTo(x + 4, y + 4);
  ctx.lineTo(x + 9, y + 4);
  ctx.moveTo(x + 3, y + 5);
  ctx.lineTo(x + 6, y + 5);
  ctx.moveTo(x + 3, y + 6);
  ctx.lineTo(x + 7, y + 6);
  ctx.moveTo(x + 0, y + 8);
  ctx.lineTo(x + 2, y + 8);
  ctx.moveTo(x + 7, y + 8);
  ctx.lineTo(x + 10, y + 8);
  ctx.moveTo(x + 0, y + 9);
  ctx.lineTo(x + 2, y + 9);
  ctx.moveTo(x + 4, y + 9);
  ctx.lineTo(x + 5, y + 9);
  ctx.moveTo(x + 7, y + 9);
  ctx.lineTo(x + 10, y + 9);
  ctx.moveTo(x + 0, y + 10);
  ctx.lineTo(x + 2, y + 10);
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(x + 5, y + 3);
  ctx.lineTo(x + 6, y + 3);
  ctx.stroke();
  ctx.fill();
}
function drawDonkeyKong(ctx, x, y) {
  ctx.strokeStyle = "brown";
  ctx.beginPath();
  ctx.moveTo(x + 11, y + 1);
  ctx.lineTo(x + 15, y + 1);
  ctx.moveTo(x + 10, y + 2);
  ctx.lineTo(x + 16, y + 2);
  ctx.moveTo(x + 9, y + 3);
  ctx.lineTo(x + 10, y + 3);
  ctx.moveTo(x + 12, y + 3);
  ctx.lineTo(x + 14, y + 3);
  ctx.moveTo(x + 16, y + 3);
  ctx.lineTo(x + 17, y + 3);
  ctx.moveTo(x + 9, y + 4);
  ctx.lineTo(x + 10, y + 4);
  ctx.moveTo(x + 12, y + 4);
  ctx.lineTo(x + 14, y + 4);
  ctx.moveTo(x + 16, y + 4);
  ctx.lineTo(x + 17, y + 4);
  ctx.moveTo(x + 9, y + 5);
  ctx.lineTo(x + 10, y + 5);
  ctx.moveTo(x + 12, y + 5);
  ctx.lineTo(x + 14, y + 5);
  ctx.moveTo(x + 16, y + 5);
  ctx.lineTo(x + 17, y + 5);
  ctx.moveTo(x + 6, y + 6);
  ctx.lineTo(x + 7, y + 6);
  ctx.moveTo(x + 9, y + 6);
  ctx.lineTo(x + 11, y + 6);
  ctx.moveTo(x + 15, y + 6);
  ctx.lineTo(x + 17, y + 6);
  ctx.moveTo(x + 19, y + 6);
  ctx.lineTo(x + 20, y + 6);
  ctx.moveTo(x + 5, y + 7);
  ctx.lineTo(x + 7, y + 7);
  ctx.moveTo(x + 19, y + 7);
  ctx.lineTo(x + 21, y + 7);
  ctx.moveTo(x + 4, y + 8);
  ctx.lineTo(x + 7, y + 8);
  ctx.moveTo(x + 19, y + 8);
  ctx.lineTo(x + 22, y + 8);
  ctx.moveTo(x + 3, y + 9);
  ctx.lineTo(x + 7, y + 9);
  ctx.moveTo(x + 10, y + 9);
  ctx.lineTo(x + 16, y + 9);
  ctx.moveTo(x + 19, y + 9);
  ctx.lineTo(x + 23, y + 9);
  ctx.moveTo(x + 2, y + 10);
  ctx.lineTo(x + 7, y + 10);
  ctx.moveTo(x + 9, y + 10);
  ctx.lineTo(x + 11, y + 10);
  ctx.moveTo(x + 15, y + 10);
  ctx.lineTo(x + 17, y + 10);
  ctx.moveTo(x + 19, y + 10);
  ctx.lineTo(x + 24, y + 10);
  ctx.moveTo(x + 2, y + 11);
  ctx.lineTo(x + 8, y + 11);
  ctx.moveTo(x + 18, y + 11);
  ctx.lineTo(x + 24, y + 11);
  ctx.moveTo(x + 2, y + 12);
  ctx.lineTo(x + 8, y + 12);
  ctx.moveTo(x + 18, y + 12);
  ctx.lineTo(x + 24, y + 12);
  ctx.moveTo(x + 2, y + 13);
  ctx.lineTo(x + 9, y + 13);
  ctx.moveTo(x + 17, y + 13);
  ctx.lineTo(x + 24, y + 13);
  ctx.moveTo(x + 2, y + 14);
  ctx.lineTo(x + 24, y + 14);
  ctx.moveTo(x + 2, y + 15);
  ctx.lineTo(x + 24, y + 15);
  ctx.moveTo(x + 3, y + 16);
  ctx.lineTo(x + 23, y + 16);
  ctx.moveTo(x + 4, y + 17);
  ctx.lineTo(x + 22, y + 17);
  ctx.moveTo(x + 5, y + 18);
  ctx.lineTo(x + 21, y + 18);
  ctx.moveTo(x + 5, y + 20);
  ctx.lineTo(x + 21, y + 20);
  ctx.moveTo(x + 4, y + 21);
  ctx.lineTo(x + 22, y + 21);
  ctx.moveTo(x + 3, y + 22);
  ctx.lineTo(x + 23, y + 22);
  ctx.moveTo(x + 3, y + 23);
  ctx.lineTo(x + 23, y + 23);
  ctx.moveTo(x + 3, y + 24);
  ctx.lineTo(x + 23, y + 24);
  ctx.moveTo(x + 3, y + 25);
  ctx.lineTo(x + 9, y + 25);
  ctx.moveTo(x + 17, y + 25);
  ctx.lineTo(x + 23, y + 25);
  ctx.moveTo(x + 3, y + 26);
  ctx.lineTo(x + 8, y + 26);
  ctx.moveTo(x + 18, y + 26);
  ctx.lineTo(x + 23, y + 26);
  ctx.moveTo(x + 4, y + 27);
  ctx.lineTo(x + 7, y + 27);
  ctx.moveTo(x + 19, y + 27);
  ctx.lineTo(x + 22, y + 27);
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(x + 10, y + 3);
  ctx.lineTo(x + 12, y + 3);
  ctx.moveTo(x + 14, y + 3);
  ctx.lineTo(x + 16, y + 3);
  ctx.moveTo(x + 10, y + 4);
  ctx.lineTo(x + 12, y + 4);
  ctx.moveTo(x + 14, y + 4);
  ctx.lineTo(x + 16, y + 4);
  ctx.moveTo(x + 7, y + 5);
  ctx.lineTo(x + 9, y + 5);
  ctx.moveTo(x + 10, y + 5);
  ctx.lineTo(x + 12, y + 5);
  ctx.moveTo(x + 14, y + 5);
  ctx.lineTo(x + 16, y + 5);
  ctx.moveTo(x + 17, y + 5);
  ctx.lineTo(x + 19, y + 5);
  ctx.moveTo(x + 7, y + 6);
  ctx.lineTo(x + 9, y + 6);
  ctx.moveTo(x + 11, y + 6);
  ctx.lineTo(x + 15, y + 6);
  ctx.moveTo(x + 17, y + 6);
  ctx.lineTo(x + 19, y + 6);
  ctx.moveTo(x + 7, y + 7);
  ctx.lineTo(x + 19, y + 7);
  ctx.moveTo(x + 7, y + 8);
  ctx.lineTo(x + 19, y + 8);
  ctx.moveTo(x + 7, y + 9);
  ctx.lineTo(x + 10, y + 9);
  ctx.moveTo(x + 16, y + 9);
  ctx.lineTo(x + 19, y + 9);
  ctx.moveTo(x + 7, y + 10);
  ctx.lineTo(x + 9, y + 10);
  ctx.moveTo(x + 11, y + 10);
  ctx.lineTo(x + 15, y + 10);
  ctx.moveTo(x + 17, y + 10);
  ctx.lineTo(x + 19, y + 10);
  ctx.moveTo(x + 8, y + 11);
  ctx.lineTo(x + 18, y + 11);
  ctx.moveTo(x + 8, y + 12);
  ctx.lineTo(x + 18, y + 12);
  ctx.moveTo(x + 9, y + 13);
  ctx.lineTo(x + 17, y + 13);
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = "pink";
  ctx.beginPath();
  ctx.moveTo(x + 6, y + 4);
  ctx.lineTo(x + 9, y + 4);
  ctx.moveTo(x + 17, y + 4);
  ctx.lineTo(x + 20, y + 4);
  ctx.moveTo(x + 6, y + 5);
  ctx.lineTo(x + 8, y + 5);
  ctx.moveTo(x + 18, y + 5);
  ctx.lineTo(x + 20, y + 5);
  ctx.moveTo(x + 4, y + 11);
  ctx.lineTo(x + 5, y + 11);
  ctx.moveTo(x + 21, y + 11);
  ctx.lineTo(x + 22, y + 11);
  ctx.moveTo(x + 4, y + 12);
  ctx.lineTo(x + 6, y + 12);
  ctx.moveTo(x + 20, y + 12);
  ctx.lineTo(x + 22, y + 12);
  ctx.moveTo(x + 5, y + 13);
  ctx.lineTo(x + 7, y + 13);
  ctx.moveTo(x + 19, y + 13);
  ctx.lineTo(x + 21, y + 13);
  ctx.moveTo(x + 6, y + 14);
  ctx.lineTo(x + 11, y + 14);
  ctx.moveTo(x + 15, y + 14);
  ctx.lineTo(x + 20, y + 14);
  ctx.moveTo(x + 8, y + 15);
  ctx.lineTo(x + 10, y + 15);
  ctx.moveTo(x + 11, y + 15);
  ctx.lineTo(x + 12, y + 15);
  ctx.moveTo(x + 14, y + 15);
  ctx.lineTo(x + 15, y + 15);
  ctx.moveTo(x + 16, y + 15);
  ctx.lineTo(x + 18, y + 15);
  ctx.moveTo(x + 9, y + 16);
  ctx.lineTo(x + 11, y + 16);
  ctx.moveTo(x + 15, y + 16);
  ctx.lineTo(x + 17, y + 16);
  ctx.moveTo(x + 9, y + 17);
  ctx.lineTo(x + 10, y + 17);
  ctx.moveTo(x + 11, y + 17);
  ctx.lineTo(x + 12, y + 17);
  ctx.moveTo(x + 14, y + 17);
  ctx.lineTo(x + 15, y + 17);
  ctx.moveTo(x + 16, y + 17);
  ctx.lineTo(x + 17, y + 17);
  ctx.moveTo(x + 9, y + 18);
  ctx.lineTo(x + 17, y + 18);
  ctx.moveTo(x + 5, y + 19);
  ctx.lineTo(x + 21, y + 19);
  ctx.moveTo(x + 9, y + 20);
  ctx.lineTo(x + 12, y + 20);
  ctx.moveTo(x + 14, y + 20);
  ctx.lineTo(x + 17, y + 20);
  ctx.moveTo(x + 12, y + 21);
  ctx.lineTo(x + 14, y + 21);
  ctx.moveTo(x + 8, y + 22);
  ctx.lineTo(x + 18, y + 22);
  ctx.moveTo(x + 10, y + 23);
  ctx.lineTo(x + 16, y + 23);
  ctx.moveTo(x + 3, y + 28);
  ctx.lineTo(x + 7, y + 28);
  ctx.moveTo(x + 19, y + 28);
  ctx.lineTo(x + 23, y + 28);
  ctx.moveTo(x + 2, y + 29);
  ctx.lineTo(x + 7, y + 29);
  ctx.moveTo(x + 19, y + 29);
  ctx.lineTo(x + 24, y + 29);
  ctx.moveTo(x + 1, y + 30);
  ctx.lineTo(x + 6, y + 30);
  ctx.moveTo(x + 20, y + 30);
  ctx.lineTo(x + 25, y + 30);
  ctx.stroke();
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(x + 11, y + 5);
  ctx.lineTo(x + 12, y + 5);
  ctx.moveTo(x + 14, y + 5);
  ctx.lineTo(x + 15, y + 5);
  ctx.moveTo(x + 12, y + 7);
  ctx.lineTo(x + 14, y + 7);
  ctx.stroke();
  ctx.fill();
}
function drawDonkeyKongGame() {
  const canvas = document.getElementById("drawAtariGame");
  const ctx = canvas.getContext("2d");
  ctx.scale(3, 3);
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
  drawHammer(ctx, 12, 128);
  drawHammer(ctx, 76, 97);
  // Draw Mario
  drawMario(ctx, 57, 73);
  // Draw Donkey Kong
  drawDonkeyKong(ctx, 70, 57);
  // Draw Text
  ctx.fillStyle = "white";
  ctx.font = "9px Arial";
  ctx.fillText("1 UP 83780", 6, 16);
  ctx.fillText("83100", 3, 39);
  ctx.fillText("5", 149, 16);
}
window.addEventListener("load", drawDonkeyKongGame);
