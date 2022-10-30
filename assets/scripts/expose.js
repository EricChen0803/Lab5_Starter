// expose.js
const jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  const selectElement = document.getElementById('horn-select');
  selectElement.addEventListener('change', (event) => {
    const result = document.querySelector("img");
    if(selectElement.value == "air-horn"){
      result.src = "assets/images/air-horn.svg";
    }
    else if(selectElement.value == "car-horn"){
      result.src = "assets/images/car-horn.svg";
    }
    else{
      result.src = "assets/images/party-horn.svg";
    }
  });
  const SE = document.getElementById('volume');
  SE.addEventListener('change', (event) => {
    const result = document.images[1];
    if(SE.value == 0){
      result.src = "assets/icons/volume-level-0.svg";
    }
    else if(SE.value <33){
      result.src = "assets/icons/volume-level-1.svg";
    }
    else if(SE.value <67){
      result.src = "assets/icons/volume-level-2.svg";
    }
    else{
      result.src = "assets/icons/volume-level-3.svg";
    }
  });
  const PH = document.querySelector("button");
  PH.addEventListener('click', (event) => {
    const ad = document.getElementById('volume');
    const result = document.querySelector("audio");
    result.volume = (ad.value)/100;
    if(selectElement.value == "air-horn"){
      result.src = "assets/audio/air-horn.mp3";
      result.play();
    }
    else if(selectElement.value == "car-horn"){
      result.src = "assets/audio/car-horn.mp3";
      result.play();
    }
    else if(selectElement.value == "party-horn"){
      result.src = "assets/audio/party-horn.mp3";
      jsConfetti.addConfetti();
      result.play();
    }
  });
}