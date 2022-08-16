const button = document.querySelector(".btn");

button.addEventListener("mouseover", (evt) => {
  const x = evt.pageX - button.offsetLeft;
  const y = evt.pageY - button.offsetTop;
  button.style.setProperty("--xPos", x + "px");
  button.style.setProperty("--yPos", y + "px");
});
