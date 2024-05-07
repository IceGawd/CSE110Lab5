// explore.js

window.addEventListener('DOMContentLoaded', init);

var voiceSelector = document.getElementById("voice-select");
var talkButton = document.getElementsByTagName('button')[0];
var face = document.getElementsByTagName('img')[0];
var voices = [];

function populateVoiceList() {
  voices = window.speechSynthesis.getVoices();

  voices.forEach(element => {
    let option = document.createElement("option");
    option.textContent = element.name;
    voiceSelector.appendChild(option);
  });
}

function voiceSpeak() {
  let utterance = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
  utterance.voice = voices[voiceSelector.selectedIndex - 1];
  utterance.addEventListener("start", speaking);
  utterance.addEventListener("end", smiling);
  speechSynthesis.speak(utterance);
}

function speaking() {
  face.src = "assets/images/smiling-open.png";
}

function smiling() {
  face.src = "assets/images/smiling.png";
}

function init() {
  talkButton.onclick = voiceSpeak;

}

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}