const date = new Date();

setInterval(() => {
  date.setSeconds(date.getSeconds() + 1);

  const hour = date.getHours();
  document.querySelector("#hour").innerHTML = doubleDigit(
    hour > 12 ? hour - 12 : hour
  );
  document.querySelector("#min").innerHTML = doubleDigit(date.getMinutes());
  document.querySelector("#sec").innerHTML = doubleDigit(date.getSeconds());
  document.querySelector("#am-pm").innerHTML =
    date.getHours() >= 12 ? "pm" : "am";
}, 1000);

function doubleDigit(val) {
  if (val < 10) {
    return "0" + val;
  }
  return val;
}
