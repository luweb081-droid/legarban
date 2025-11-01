// --- MENU CAROUSEL AUTO INFINI --- //
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".menu-track");
  let index = 0;
  const itemWidth = 320; // largeur d’un élément
  const interval = 3000; // temps entre chaque défilement (en ms)

  if (track) {
    const items = document.querySelectorAll(".menu-item");
    const total = items.length;

    // Cloner le premier élément pour rendre la boucle fluide
    const firstClone = items[0].cloneNode(true);
    track.appendChild(firstClone);

    setInterval(() => {
      index++;
      track.style.transition = "transform 0.6s ease";
      track.style.transform = `translateX(-${index * itemWidth}px)`;

      // Quand on atteint la fin (clone), on revient instantanément au début
      if (index === total) {
        setTimeout(() => {
          track.style.transition = "none";
          track.style.transform = "translateX(0)";
          index = 0;
        }, 600); // temps de la transition
      }
    }, interval);
  }

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
