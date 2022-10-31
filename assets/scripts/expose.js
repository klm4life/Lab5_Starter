// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let hornImage = document.querySelector("[src='assets/images/no-image.png']");
  let horn = document.getElementById("horn-select");
  let audio = document.querySelector("audio");
  let volume = document.getElementById("volume");
  let volumeIcon = document.querySelector("[src='assets/icons/volume-level-2.svg']");
  let playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();
  horn.addEventListener('input', selectHorn);
  volume.addEventListener('input', changeVolume);
  playButton.addEventListener('click', playAudio);

  function selectHorn() {
    if (horn.value == 'air-horn') {
      hornImage.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }

    if (horn.value == 'car-horn') {
      hornImage.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }

    if (horn.value == 'party-horn') {
      hornImage.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  }

  function changeVolume() {
    audio.volume = volume.value / 100;
    if (volume.value == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }

    if (volume.value >= 1 && volume.value < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }

    if (volume.value >= 32 && volume.value < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }

    if (volume.value >= 67) {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  }

  function playAudio() {
    if (horn.value == 'party-horn') {
      audio.play();
      jsConfetti.addConfetti()
    }
    else {
      audio.play();
    }
  }
  
}

