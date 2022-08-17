let total = 0;
function addImage(count) {
  const container = document.querySelector(".main-container");
  console.log(count);
  for (let i = 1; i <= count; i++) {
    const image = document.createElement("img");
    image.setAttribute("src", `https://picsum.photos/400?random=${++total}`);
    container.appendChild(image);
  }
}

addImage(10);
