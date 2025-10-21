// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// video zoom on scroll
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('zoomVideo');
  const MAX_SCALE = 1.8;
  const SCALE_RATE = 0.005;

  function handleZoom() {
    const scrollY = window.scrollY;
    let scale = 1 + scrollY * SCALE_RATE;
    if (scale > MAX_SCALE) scale = MAX_SCALE;
    video.style.transform = `scale(${scale})`;
  }

  window.addEventListener('scroll', handleZoom);
  handleZoom();
});
