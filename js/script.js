
    const canvas = document.getElementById("stars");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.7 + 0.2
      });
    }

    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        star.y -= star.speed;

        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      }

      requestAnimationFrame(animateStars);
    }

    animateStars();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    function toggleIdioma() {
      const flag = document.getElementById('flag-icon');
      const actual = flag.src.includes('es.png') ? 'es' : 'en';
      const nuevo = actual === 'es' ? 'en' : 'es';
      flag.src = `https://flagcdn.com/w40/${nuevo}.png`;

      const textos = {
        es: {
          saludo: "Hola 👋🏼, soy",
          rol: "Software Developer",
          btnContacto: "Contáctame",
          btnCV: "Descargar CV",
          sobreMi: "Sobre mí",
          proyectos: "Mis proyectos",
          contacto: "Contáctame"
        },
        en: {
          saludo: "Hi 👋🏼, I'm",
          rol: "Software Developer",
          btnContacto: "Contact me",
          btnCV: "Download CV",
          sobreMi: "About me",
          proyectos: "My projects",
          contacto: "Contact"
        }
      };

      const t = textos[nuevo];
      document.getElementById("saludo").innerHTML = t.saludo;
      document.getElementById("rol").textContent = t.rol;
      document.getElementById("btn-contacto").innerHTML = `<i class='fa-regular fa-paper-plane'></i> ${t.btnContacto}`;
      document.getElementById("btn-cv").innerHTML = `<i class='fa-solid fa-download'></i> ${t.btnCV}`;
      document.querySelector("a[href='#sobre-mi']").textContent = t.sobreMi;
      document.querySelector("a[href='#proyectos']").textContent = t.proyectos;
      document.querySelector("a[href='#contacto']").textContent = t.contacto;
      document.querySelector("#sobre-mi h2").textContent = t.sobreMi;
      document.querySelector("#proyectos h2").textContent = t.proyectos;
      document.querySelector("#contacto h2").textContent = t.contacto;
    }


        // Efecto spotlight que sigue al mouse (Aurora verde)
         const texto = document.getElementById("sobre-mi-texto");

     texto.addEventListener("mousemove", (e) => {
      const rect = texto.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      texto.style.setProperty("--mouse-x", `${x}px`);
      texto.style.setProperty("--mouse-y", `${y}px`);
    });