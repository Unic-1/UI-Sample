const crash = document.getElementById("crashAudio");
const kick = document.getElementById("kickAudio");
const snare = document.getElementById("snareAudio");
const tom = document.getElementById("tomAudio");

function play(instrument) {
  switch (instrument) {
    case "crash":
      crash.play();
      break;
    case "kick":
      kick.play();
      break;
    case "snare":
      snare.play();
      break;
    case "tom":
      tom.play();
      break;
  }
}

const instrumentMap = {
  c: "crash",
  k: "kick",
  s: "snare",
  t: "tom",
};

document.body.addEventListener("keydown", (event) => {
  play(instrumentMap[event.key]);
});
