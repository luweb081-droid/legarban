document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".menu-track");
  if (!track) return;

  // --- DUPLICATION POUR BOUCLE INFINIE ---
  track.innerHTML += track.innerHTML; // duplique tout le contenu

  let position = 0;
  const speed = 0.5; // ajustable, plus lent pour mobile

  function animate() {
    position += speed;

    // Largeur totale de la moitié du contenu
    const totalWidth = track.scrollWidth / 2;

    // Reset pour boucle infinie
    if (position >= totalWidth) {
      position = position % totalWidth;
    }

    track.style.transform = `translateX(-${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();

  // --- FADE-IN ---
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

  // --- Ajustement si redimensionnement ---
  window.addEventListener("resize", () => {
    location.reload(); // recalcul des largeurs pour l'animation
  });
});
