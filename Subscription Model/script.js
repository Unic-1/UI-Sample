document.querySelector(".subscribe").addEventListener("click", () => {
  document.querySelector(".model").style.animation = "animateIn 2s";
  document.querySelector(".overlay").classList.remove("hidden");
  document.querySelector(".home").style.filter = "blur(5px)";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".home").style.filter = "blur(0px)";
  document.querySelector(".model").style.animation = "animateOut 2s";
  setTimeout(() => {
    document.querySelector(".overlay").classList.add("hidden");
  }, 2000);
});
