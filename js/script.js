document.addEventListener('DOMContentLoaded', () => {
  // Función para cambiar de tema
  function switchTheme(theme) {
    const app = document.getElementById('app');
    const btnDesignToggle = document.getElementById('btn-design-toggle');
    
    if (theme === 'design') {
      // Cambiar a modo diseño
      document.querySelector('.code-interface').style.display = 'none';
      document.querySelector('.design-interface').style.display = 'block';
      document.getElementById('design-theme').disabled = false;
      document.getElementById('code-theme').disabled = true;
      btnDesignToggle.innerHTML = '<i class="fas fa-code me-1"></i>Versión Código';
    } else {
      // Cambiar a modo código
      document.querySelector('.design-interface').style.display = 'none';
      document.querySelector('.code-interface').style.display = 'flex';
      document.getElementById('code-theme').disabled = false;
      document.getElementById('design-theme').disabled = true;
      btnDesignToggle.innerHTML = '<i class="fas fa-palette me-1"></i>Versión Diseño';
    }
  }
  
  // Evento para el botón de cambio de tema
  document.getElementById('btn-design-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    const currentMode = document.querySelector('.code-interface').style.display === 'none' ? 'code' : 'design';
    switchTheme(currentMode);
  });


  /* Cambio de pestañas en el editor
  document.querySelectorAll('.nav-tabs .nav-link').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remover clase 'active' de todas las pestañas y contenidos
      document.querySelectorAll('.nav-tabs .nav-link').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      // Agregar 'active' a la pestaña clickeada
      tab.classList.add('active');
      
      // Mostrar el contenido correspondiente
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });*/


  








          // Función para cambiar pestañas
        function switchTab(tabId) {
          // Oculta todos los contenidos
          document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
          });
          
          // Muestra solo el contenido seleccionado
          const activeContent = document.getElementById(tabId);
          if (activeContent) {
            activeContent.classList.add('active');
          }
          
          // Actualiza la pestaña activa
          document.querySelectorAll('.nav-link').forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-tab') === tabId) {
              tab.classList.add('active');
            }
          });
          
          // Cierra el menú hamburguesa en móvil
          const navbarCollapse = document.getElementById('codeTabs');
          if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse, {toggle: false}).hide();
          }
        }

        // Event listeners para las pestañas
        document.querySelectorAll('.nav-link[data-tab]').forEach(tab => {
          tab.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
          });
        });

        // Carga inicial - asegura que about-me.js esté activo
        switchTab('about');
     


});



