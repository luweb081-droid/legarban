// --- MENU CAROUSEL --- //
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".menu-track");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let index = 0;

  if (!track || !prev || !next) return; // sécurité

  next.addEventListener("click", () => {
    const items = document.querySelectorAll(".menu-item");
    if (index < items.length - 1) index++;
    track.style.transform = `translateX(-${index * 320}px)`;
  });

  prev.addEventListener("click", () => {
    if (index > 0) index--;
    track.style.transform = `translateX(-${index * 320}px)`;
  });
});
// Fade-in au scroll
const fadeEls = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
