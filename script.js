document.addEventListener("DOMContentLoaded", () => {

  // --------------------------
  // CARROUSEL MENU (PC + MOBILE)
  // --------------------------
  const track = document.querySelector(".menu-track");
  if (track) { // seulement si on est sur une page avec le carrousel

    // Dupliquer pour boucle infinie fluide
    track.innerHTML += track.innerHTML;

    let position = 0;
    const speed = 0.5; // ajustable pour vitesse

    function animate() {
      position += speed;

      const totalWidth = track.scrollWidth / 2; // moitié du contenu dupliqué

      // Reset fluide
      if (position >= totalWidth) {
        position -= totalWidth;
      }

      track.style.transform = `translateX(-${position}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  // --------------------------
  // FADE-IN pour toutes les pages
  // --------------------------
  const fadeEls = document.querySelectorAll(".fade-in");

  function handleFadeIn() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  handleFadeIn();
  window.addEventListener("scroll", handleFadeIn);

});
