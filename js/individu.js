const texts = ["Programmer", "Developer", "Novel Writer"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    document.getElementById("typing").innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    // selesai ngetik satu kata → tunggu → ganti kata
    setTimeout(() => {
      document.getElementById("typing").innerHTML = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length; // ganti kata (loop)
      type();
    }, 1000);
  }
}

type();

const button = document.querySelector(".btn");
  const music = document.getElementById("music");

  button.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      button.textContent = "Pause Music";
    }
    else {
      music.pause();
      button.textContent = "Play Music";
    }
  });