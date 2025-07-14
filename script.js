const canvas = document.getElementById('glCanvas');
const gl = canvas.getContext('webgl');

if (!gl) {
  alert('WebGL not supported');
  throw new Error('WebGL not supported');
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function render() {
  // Random background color for testing animation
  gl.clearColor(Math.random(), Math.random(), Math.random(), 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  requestAnimationFrame(render);
}

render();
