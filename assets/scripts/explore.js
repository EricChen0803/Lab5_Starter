// explore.js
window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

const voiceSelect = document.querySelector('select');

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}



function init() {
  // TODO
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  const bt = document.querySelector("button");
  bt.addEventListener('click', (event) => {
    const result = document.querySelector("img");
    result.src = "assets/images/smiling-open.png";
    const utterThis = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    utterThis.addEventListener('end', (event) => {
      result.src = "assets/images/smiling.png";
    });
  });
  
}