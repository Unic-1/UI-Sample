function counter() {
  const sentence = document.querySelector("textarea").value;

  document.querySelector("#charCount").innerHTML = sentence.length;
  document.querySelector("#charRemaining").innerHTML = 50 - sentence.length;
}
