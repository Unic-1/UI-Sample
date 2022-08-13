const date = new Date();

setInterval(() => {
  date.setSeconds(date.getSeconds() + 1);

  document.querySelector("#hour").innerHTML = doubleDigit(date.getHours());
  document.querySelector("#min").innerHTML = doubleDigit(date.getMinutes());
  document.querySelector("#sec").innerHTML = doubleDigit(date.getSeconds());
}, 1000);

function doubleDigit(val) {
  if (val < 10) {
    return "0" + val;
  }
  return val;
}
