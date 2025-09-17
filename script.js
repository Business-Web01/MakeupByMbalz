// Fade in effect for byline (from before)
document.addEventListener('DOMContentLoaded', function () {
  const scriptSpan = document.querySelector('.byline .script');
  if (scriptSpan) {
    scriptSpan.style.opacity = 0;
    scriptSpan.style.transition = 'opacity 900ms ease 600ms';
    requestAnimationFrame(() => {
      scriptSpan.style.opacity = 1;
    });
  }

  // Handle info buttons in Wall of Fame
  document.querySelectorAll('.gallery-item').forEach(item => {
    const infoBtn = item.querySelector('.info-btn');
    const overlay = item.querySelector('.info-overlay');
    const closeBtn = item.querySelector('.close-btn');

    infoBtn.addEventListener('click', () => {
      overlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });
  });
});
