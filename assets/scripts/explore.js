// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const voiceSelect = document.querySelector('select');

  let voices = [];
  let textBox = document.querySelector("textarea");
  let image = document.querySelector("img");
  let talkButton = document.querySelector("button");
  talkButton.addEventListener('click', buttonClicked);

  setInterval(changeImage, 1);

  function buttonClicked() {
    const utterThis = new SpeechSynthesisUtterance(textBox.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }
      synth.speak(utterThis);
    }

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
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  function changeImage() {
    if (speechSynthesis.speaking) {
    image.src = "assets/images/smiling-open.png";
    }
    else {
      image.src = "assets/images/smiling.png";
    }
  }

}