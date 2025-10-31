// --- MENU CAROUSEL --- //
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".menu-track");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let index = 0;

  if (track && prev && next) {
    next.addEventListener("click", () => {
      const items = document.querySelectorAll(".menu-item");
      if (index < items.length - 1) index++;
      track.style.transform = `translateX(-${index * 320}px)`;
    });

    prev.addEventListener("click", () => {
      if (index > 0) index--;
      track.style.transform = `translateX(-${index * 320}px)`;
    });
  }

  // --- FADE-IN ---
  const fadeEls = document.querySelectorAll('.fade-in');

  function handleFadeIn() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  // Apparition immédiate au chargement
  handleFadeIn();

  // Apparition au scroll
  window.addEventListener('scroll', handleFadeIn);
});
