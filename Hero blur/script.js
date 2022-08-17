window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");

  hero.style.backgroundSize = 160 - window.scrollY / 15 + "%";
  hero.style.opacity = 1 - window.scrollY / 1000;
});
