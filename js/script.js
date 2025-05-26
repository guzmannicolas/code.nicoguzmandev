// Estrellas animadas
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];
let w, h;

function resizeCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  stars = Array.from({ length: 200 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 1.5,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5
  }));
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function drawStars() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#ffffff";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.x += star.vx;
    star.y += star.vy;

    if (star.x < 0 || star.x > w) star.vx *= -1;
    if (star.y < 0 || star.y > h) star.vy *= -1;
  });
  requestAnimationFrame(drawStars);
}
drawStars();

// Alternar idioma
function toggleIdioma() {
  const saludo = document.getElementById("saludo");
  const rol = document.getElementById("rol");
  const btnContacto = document.getElementById("btn-contacto");
  const btnCV = document.getElementById("btn-cv");
  const flagIcon = document.getElementById("flag-icon");

  if (saludo.innerText.includes("Hola")) {
    saludo.innerText = "Hi 👋🏼, I'm";
    rol.innerText = "Software Developer";
    btnContacto.innerHTML = `<i class="fa-regular fa-paper-plane"></i> Contact me`;
    btnCV.innerHTML = `<i class="fa-solid fa-download"></i> Download CV`;
    flagIcon.src = "https://flagcdn.com/w40/gb.png";
  } else {
    saludo.innerText = "Hola 👋🏼, soy";
    rol.innerText = "Software Developer";
    btnContacto.innerHTML = `<i class="fa-regular fa-paper-plane"></i> Contáctame`;
    btnCV.innerHTML = `<i class="fa-solid fa-download"></i> Descargar CV`;
    flagIcon.src = "https://flagcdn.com/w40/es.png";
  }
}
