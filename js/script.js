// script.js
document.addEventListener('DOMContentLoaded', () => {
  const btnCode = document.getElementById('btn-code');
  const btnDesign = document.getElementById('btn-design');
  const codeInterface = document.querySelector('.code-interface');
  const designInterface = document.querySelector('.design-interface');
  const app = document.getElementById('app');

  // Alternar entre temas
document.getElementById('btn-code').addEventListener('click', () => {
  document.getElementById('design-theme').disabled = true;
  document.getElementById('code-theme').disabled = false;
});

document.getElementById('btn-design').addEventListener('click', () => {
  document.getElementById('code-theme').disabled = true;
  document.getElementById('design-theme').disabled = false;
});

  btnCode.addEventListener('click', () => {
    app.classList.remove('design-mode');
    app.classList.add('code-mode');
    codeInterface.style.display = 'block';
    designInterface.style.display = 'none';
    btnCode.classList.add('active');
    btnDesign.classList.remove('active');
  });

  btnDesign.addEventListener('click', () => {
    app.classList.remove('code-mode');
    app.classList.add('design-mode');
    codeInterface.style.display = 'none';
    designInterface.style.display = 'block';
    btnDesign.classList.add('active');
    btnCode.classList.remove('active');
  });
});

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
    document.getElementById(tabId).classList.add('active');
  });
});