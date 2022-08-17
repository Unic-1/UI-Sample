document.querySelectorAll(".color-box").forEach((ele) => {
  const randomColor = colorGenerator();
  console.log(randomColor);
  ele.style.backgroundColor = randomColor;
  ele.innerHTML = randomColor;

  ele.addEventListener("click", () => {
    navigator.clipboard.writeText(randomColor);
    alert("Copied color: " + randomColor);
  });
});

function colorGenerator() {
  var x = Math.round(0xffffff * Math.random()).toString(16);
  var y = 6 - x.length;
  var z = "000000";
  var z1 = z.substring(0, y);
  var color = "#" + z1 + x;
  return color;
}
