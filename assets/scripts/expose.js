// expose.js

window.addEventListener('DOMContentLoaded', init);

var hornSelect = document.getElementById("horn-select");
var selectedAudioFile = document.getElementsByClassName("hidden")[0];;
var volumeSlider = document.getElementById("volume");
var volumeImg = document.querySelector('[alt="Volume level 2"]');
var soundPlayer = document.getElementsByTagName('button')[0];

function changeImage() {
  let displayImage = document.querySelector('[alt="No image selected"]');
  displayImage.src = "assets/images/" + hornSelect.value + ".svg";
  selectedAudioFile.src = "assets/audio/" + hornSelect.value + ".mp3";
}

async function playSound() {
  try {
    await selectedAudioFile.play();
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti();
  } catch (err) {
    console.log(err);
  }
}

function changeVolume() {
  let val = volumeSlider.value;
  selectedAudioFile.volume = val / 100;
  if (val == 0) {
    volumeImg.src = "assets/icons/volume-level-0.svg";
  }
  else if (val < 33) {
    volumeImg.src = "assets/icons/volume-level-1.svg";
  }
  else if (val < 67) {
    volumeImg.src = "assets/icons/volume-level-2.svg";
  }
  else {
    volumeImg.src = "assets/icons/volume-level-3.svg";
  }
}

function init() {
  hornSelect.onchange = changeImage;
  soundPlayer.onclick = playSound;
  volumeSlider.oninput = changeVolume;
}