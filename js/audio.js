const audioFunctionality = () => {
  const bgAudio = document.querySelector(".bg-audio");
  const soundControlBtn = document.querySelector(".sound-control-btn");
  const soundCloudIcon = document.querySelector(".fa-soundcloud");
  bgAudio.volume = 0.2;

  soundControlBtn.addEventListener("click", (e) => {
    soundCloudIcon.classList.toggle("playing");
    soundControlBtn.classList.toggle("playing");
    if (soundControlBtn.classList.contains("playing")) {
      bgAudio.play();
      soundControlBtn.textContent = "ON";
    } else {
      bgAudio.pause();
      soundControlBtn.textContent = "OFF";
    }
  });
};

export default audioFunctionality;
