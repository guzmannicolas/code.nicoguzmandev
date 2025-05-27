/**
 * Portfolio Theme Switcher and Tab Manager
 * Handles theme switching between code and design views
 * Manages tab navigation within the code editor interface
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const app = document.getElementById('app');
  const btnDesignToggle = document.getElementById('btn-design-toggle');
  const codeTheme = document.getElementById('code-theme');
  const designTheme = document.getElementById('design-theme');
  const navbarCollapse = document.getElementById('editorTabs');

  /**
   * Switches between code and design themes
   * @param {string} theme - Theme to switch to ('code' or 'design')
   */
  function switchTheme(theme) {
    const codeInterface = document.querySelector('.code-interface');
    const designInterface = document.querySelector('.design-interface');
    
    if (theme === 'design') {
      // Switch to design theme
      codeInterface.style.display = 'none';
      designInterface.style.display = 'block';
      designTheme.disabled = false;
      codeTheme.disabled = true;
      btnDesignToggle.innerHTML = '<i class="fas fa-code me-1"></i>Versión Código';
    } else {
      // Switch to code theme
      designInterface.style.display = 'none';
      codeInterface.style.display = 'flex';
      codeTheme.disabled = false;
      designTheme.disabled = true;
      btnDesignToggle.innerHTML = '<i class="fas fa-palette me-1"></i>Versión Diseño';
    }
  }

  /**
   * Switches between editor tabs
   * @param {string} tabId - ID of the tab to activate
   */
  function switchTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    
    // Show selected tab content
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
      activeContent.classList.add('active');
    }
    
    // Update active tab
    document.querySelectorAll('.tab, .nav-link').forEach(tab => {
      tab.classList.remove('active');
      if (tab.getAttribute('data-tab') === tabId) {
        tab.classList.add('active');
      }
    });
    
    // Close mobile menu if open
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse, { toggle: false }).hide();
    }
  }

  // Event Listeners

  // Theme toggle button
  btnDesignToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const currentMode = document.querySelector('.code-interface').style.display === 'none' 
      ? 'code' 
      : 'design';
    switchTheme(currentMode);
  });

  // Tab navigation (for both desktop tabs and mobile nav-links)
  document.querySelectorAll('.tab[data-tab], .nav-link[data-tab]').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = tab.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Initialize default tab
  switchTab('home');
});