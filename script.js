// --- MENU CAROUSEL AUTO INFINI --- //
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".menu-track");
  if (!track) return;

  const items = Array.from(track.children);
  const total = items.length;
  let index = 0;
  const interval = 3000; // durée entre chaque slide
  let itemWidth = items[0].offsetWidth;

  // --- CLONAGE pour boucle infinie ---
  track.innerHTML += track.innerHTML; // duplique tout le contenu
  track.style.display = "flex";
  track.style.transition = "transform 0.5s ease";

  // --- AUTO défilement ---
  setInterval(() => {
    itemWidth = items[0].offsetWidth; // recalcul si responsive
    index++;
    track.style.transform = `translateX(-${index * itemWidth}px)`;

    // Quand on arrive à la fin du premier bloc, reset fluide
    if (index >= total) {
      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        index = 0;
        // réactive la transition
        setTimeout(() => {
          track.style.transition = "transform 0.5s ease";
        }, 50);
      }, 500);
    }
  }, interval);

  // --- FADE-IN --- //
  const fadeEls = document.querySelectorAll(".fade-in");
  function handleFadeIn() {
    fadeEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  handleFadeIn();
  window.addEventListener("scroll", handleFadeIn);
});
