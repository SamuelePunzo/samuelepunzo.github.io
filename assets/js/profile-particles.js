/* particles.js settings inspired by https://giulionisi.me/js/app.js.
 * Library: Vincent Garreau, MIT; see /js/vendor/particles.LICENSE.txt.
 */
(() => {
  const container = document.getElementById('profile-particles');
  const about = document.getElementById('about-container');
  if (!container || !about || typeof window.particlesJS !== 'function') return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const palette = () => document.documentElement.classList.contains('dark')
    ? { dot: '#cbd5e1', line: '#94a3b8' }
    : { dot: '#202945', line: '#344b91' };
  const colors = palette();

  window.particlesJS(container.id, {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: colors.dot },
      shape: { type: 'circle', stroke: { width: 0 } },
      opacity: { value: 0.7, random: false },
      size: { value: 5, random: true },
      line_linked: { enable: true, distance: 150, color: colors.line, opacity: 0.4, width: 1 },
      // The library initializes density before line colors in static mode.
      // Start normally, then syncMotion cancels playback before the next frame
      // when reduced motion or page visibility calls for a still background.
      move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', attract: { enable: false } },
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes: { repulse: { distance: 200 }, push: { particles_nb: 4 } },
    },
    retina_detect: true,
  });

  const engine = window.pJSDom.find(item => item.pJS.canvas.el.parentElement === container)?.pJS;
  if (!engine) return;
  let inView = true;
  let running = true;

  function syncMotion() {
    const shouldRun = !reducedMotion.matches && !document.hidden && inView;
    engine.interactivity.events.onhover.enable = shouldRun;
    engine.interactivity.events.onclick.enable = shouldRun;
    if (!shouldRun) clearHover();
    if (running === shouldRun) return;
    running = shouldRun;
    engine.particles.move.enable = shouldRun;
    cancelAnimationFrame(engine.fn.drawAnimFrame);
    engine.fn.drawAnimFrame = null;
    if (shouldRun) engine.fn.vendors.draw();
  }

  function clearHover() {
    engine.interactivity.mouse.pos_x = null;
    engine.interactivity.mouse.pos_y = null;
    engine.interactivity.status = 'mouseleave';
  }

  // Text and links sit above the canvas. Their mouse events bubble through
  // the About area without preventing text selection or normal link clicks.
  about.addEventListener('mousemove', event => {
    if (!running) return;
    const canvas = engine.canvas.el;
    const bounds = canvas.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    if (!bounds.width || !bounds.height || x < 0 || y < 0 || x > bounds.width || y > bounds.height) {
      clearHover();
      return;
    }
    // Map viewport coordinates to the canvas backing pixels, including retina
    // scaling. Child-relative offsetX/offsetY would jump when crossing text.
    engine.interactivity.mouse.pos_x = x * canvas.width / bounds.width;
    engine.interactivity.mouse.pos_y = y * canvas.height / bounds.height;
    engine.interactivity.status = 'mousemove';
  }, { passive: true });
  about.addEventListener('mouseleave', clearHover);
  window.addEventListener('scroll', clearHover, { passive: true });

  function updateColors() {
    const next = palette();
    const rgb = hex => ({
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16),
    });
    engine.particles.color.value = next.dot;
    engine.particles.line_linked.color = next.line;
    engine.particles.line_linked.color_rgb_line = rgb(next.line);
    engine.particles.array.forEach(particle => { particle.color.rgb = rgb(next.dot); });
    if (!running) engine.fn.particlesDraw();
  }

  // Bound click-added particles so repeated clicks cannot grow the work indefinitely.
  const pushParticles = engine.fn.modes.pushParticles;
  engine.fn.modes.pushParticles = (count, position) => {
    const available = Math.max(0, 160 - engine.particles.array.length);
    if (available) pushParticles(Math.min(count, available), position);
  };

  reducedMotion.addEventListener('change', syncMotion);
  document.addEventListener('visibilitychange', syncMotion);
  new MutationObserver(updateColors).observe(document.documentElement, {
    attributes: true, attributeFilter: ['class'],
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      syncMotion();
    }).observe(container);
  }
  syncMotion();
})();
