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


function animateCountUp(targetId, start, end, duration) {
  const obj = document.getElementById(targetId);
  if (!obj) return;

  let startTime = null;
  const range = end - start;
  
  obj.innerHTML = start; 

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;

    const progress = Math.min((timestamp - startTime) / duration, 1);

    const currentValue = Math.floor(progress * range + start);

    obj.innerHTML = currentValue.toLocaleString();

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
    const targetElement = document.getElementById('my-counter');
    if (!targetElement) {
        return;
    }

    let animationExecuted = false;

    const options = {
        root: null,
        rootMargin: '0px 0px -40% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationExecuted) {
                animateCountUp('my-counter', 0, 1000, 2000); 
                
                animationExecuted = true;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(targetElement);
});


