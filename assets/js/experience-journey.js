(() => {
  // Only decoration depends on JS: every stop is already readable in the HTML.
  document.querySelectorAll('[data-experience-journey]').forEach(journey => {
    const svg = journey.querySelector('.journey-route');
    const steps = [...journey.querySelectorAll('.journey-step')];
    const desktop = window.matchMedia('(min-width: 900px)');
    let frame = 0;

    function draw() {
      frame = 0;
      const bounds = journey.getBoundingClientRect();
      if (!bounds.width || !bounds.height || !steps.length) return;
      const points = steps.map(step => {
        const dot = step.querySelector('.journey-stop').getBoundingClientRect();
        const card = step.querySelector('.journey-card').getBoundingClientRect();
        return { x: dot.left + dot.width / 2 - bounds.left,
          y: dot.top + dot.height / 2 - bounds.top,
          top: card.top - bounds.top, bottom: card.bottom - bounds.top };
      });
      let path;
      if (desktop.matches) {
        const first = points[0];
        path = `M 12 ${bounds.height - 8} C ${first.x} ${bounds.height - 8}, ${first.x} ${bounds.height - 8}, ${first.x} ${first.y}`;
        points.slice(1).forEach((point, i) => {
          const previous = points[i];
          // Rounded bends travel in the gap between cards, never through text.
          const middle = (previous.top + point.bottom) / 2;
          const radius = Math.min(34, (point.x - previous.x) / 2,
            (previous.y - middle) / 2, (middle - point.y) / 2);
          path += ` L ${previous.x} ${middle + radius} Q ${previous.x} ${middle} ${previous.x + radius} ${middle}`;
          path += ` L ${point.x - radius} ${middle} Q ${point.x} ${middle} ${point.x} ${middle - radius} L ${point.x} ${point.y}`;
        });
        const last = points[points.length - 1];
        path += ` C ${last.x} 8, ${last.x} 8, ${bounds.width - 12} 8`;
      } else {
        path = `M ${points[0].x} ${points[0].y}`;
        points.slice(1).forEach((point, i) => {
          const previous = points[i];
          const middle = (previous.y + point.y) / 2;
          path += ` C ${previous.x - 14} ${middle}, ${point.x + 14} ${middle}, ${point.x} ${point.y}`;
        });
      }
      svg.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
      svg.querySelectorAll('path').forEach(line => line.setAttribute('d', path));
    }

    function scheduleDraw() {
      if (!frame) frame = window.requestAnimationFrame(draw);
    }
    new ResizeObserver(scheduleDraw).observe(journey);
    desktop.addEventListener('change', scheduleDraw);
    document.fonts.ready.then(scheduleDraw);
    scheduleDraw();
  });
})();
