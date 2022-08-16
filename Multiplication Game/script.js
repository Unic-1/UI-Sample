let num1, num2;

function generateNumber() {
  num1 = Math.ceil(Math.random() * 10);
  num2 = Math.ceil(Math.random() * 10);
}

function setQuestion() {
  document.querySelector("#num1").innerHTML = num1;
  document.querySelector("#num2").innerHTML = num2;
}

function submit() {
  const in_r = document.querySelector("input[type=number]");
  const result = in_r.value;
  const ans = num1 * num2;
  console.log(ans, result);
  let score = localStorage.getItem("score") || 0;
  if (ans == result) {
    localStorage.setItem("score", ++score);
    document.querySelector("#score").innerHTML = score;
  } else {
    const highscore = localStorage.getItem("highscore");
    if (highscore < score) localStorage.setItem("highscore", score);
    localStorage.removeItem("score");
    document.querySelector("#score").innerHTML = 0;
  }
  generateNumber();
  setQuestion();
  in_r.value = "";
  in_r.focus();
}

generateNumber();
setQuestion();
