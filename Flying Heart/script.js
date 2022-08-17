const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  const dimension = Math.random() * 100;
  const hSpan = document.createElement("span");
  hSpan.style.top = yPos + "px";
  hSpan.style.left = xPos + "px";
  hSpan.style.height = dimension + "px";
  hSpan.style.width = dimension + "px";
  body.appendChild(hSpan);
  setTimeout(() => {
    hSpan.remove();
  }, 3000);
});
