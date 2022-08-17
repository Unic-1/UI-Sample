document.addEventListener("scroll", (evt) => {
  const heightThreshold =
    document.querySelector(".content-section").offsetTop - 30 - 15;
  console.log(window.scrollY, heightThreshold);
  const navBar = document.querySelector("nav");
  if (window.scrollY >= heightThreshold) {
    navBar.classList.add("floating-nav");
  } else {
    navBar.classList.remove("floating-nav");
  }
});
