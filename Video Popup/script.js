document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".video-container").classList.remove("hide");
});

document.querySelector("span.material-icons").addEventListener("click", () => {
  document.querySelector(".video-container").classList.add("hide");
});
