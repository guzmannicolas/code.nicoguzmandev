document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const app = document.getElementById('app');
  const btnCode = document.getElementById('btn-code');
  const btnDesign = document.getElementById('btn-design');
  const btnDesignToggle = document.getElementById('btn-design-toggle');
  const codeTheme = document.getElementById('code-theme');
  const designTheme = document.getElementById('design-theme');

  // Función para cambiar de tema
  function switchTheme(theme) {
    if (theme === 'design') {
      // Cambiar a modo diseño
      app.classList.replace('code-mode', 'design-mode');
      designTheme.disabled = false;
      codeTheme.disabled = true;
      btnDesignToggle.textContent = 'Versión Código';
      
      // Actualizar botones (si existen)
      if (btnCode && btnDesign) {
        btnCode.classList.remove('active');
        btnDesign.classList.add('active');
      }
    } else {
      // Cambiar a modo código
      app.classList.replace('design-mode', 'code-mode');
      codeTheme.disabled = false;
      designTheme.disabled = true;
      btnDesignToggle.textContent = 'Versión Diseño';
      
      // Actualizar botones (si existen)
      if (btnCode && btnDesign) {
        btnCode.classList.add('active');
        btnDesign.classList.remove('active');
      }
    }
  }

  // Event listeners para botones de tema
  if (btnDesignToggle) {
    btnDesignToggle.addEventListener('click', () => {
      const currentMode = app.classList.contains('code-mode') ? 'design' : 'code';
      switchTheme(currentMode);
    });
  }

  if (btnCode && btnDesign) {
    btnCode.addEventListener('click', () => switchTheme('code'));
    btnDesign.addEventListener('click', () => switchTheme('design'));
  }

  // Cambio de pestañas en el editor
  document.querySelectorAll('.editor-tabs .tab').forEach(tab => {
    tab.addEventListener('click', () => {
      // Remover clase 'active' de todas las pestañas y contenidos
      document.querySelectorAll('.editor-tabs .tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      // Agregar 'active' a la pestaña clickeada
      tab.classList.add('active');
      
      // Mostrar el contenido correspondiente
      const tabId = tab.getAttribute('data-tab');
      if (tabId) {
        document.getElementById(tabId).classList.add('active');
      }
    });
  });
});