const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const heartPath = [
  { x: 700, y: 300 },
  { x: 600, y: 200 },
  { x: 500, y: 300 },
  { x: 700, y: 500 },
  { x: 900, y: 300 },
  { x: 800, y: 200 },
];

function drawHeart() {
  ctx.fillStyle = '#ff0000';
  ctx.beginPath();
  ctx.moveTo(heartPath[0].x, heartPath[0].y);

  for (let i = 1; i < heartPath.length; i++) {
    ctx.lineTo(heartPath[i].x, heartPath[i].y);
  }

  ctx.closePath();
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawHeart();
  requestAnimationFrame(animate);
}

animate();
