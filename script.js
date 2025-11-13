// Manejo de splash (5 segundos) + navegación entre secciones

window.addEventListener('load', () => {
  // Mostrar splash por 2 segundos (2000 ms)
  const splash = document.getElementById('splash');
  const app = document.getElementById('app');

  setTimeout(() => {
    // Desaparece el splash y muestra la app
    if (splash) splash.style.display = 'none';
    if (app) {
      app.setAttribute('aria-hidden', 'false');
      // mostrar sección home
      showPanel('home');
    }
  }, 2000);
});

// Utilidades de navegación
function showPanel(id) {
  // ocultar todos los paneles
  document.querySelectorAll('.panel').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (!target) return;

  target.style.display = 'block';
  // Forzar reflow para animación suave
  void target.offsetWidth;
  target.classList.add('active');

  // Scroll to top del main
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSection(sectionId) {
  // mapping de IDs: 'materiales','luces','programacion'
  showPanel(sectionId);
}

function goHome() {
  showPanel('home');
}

