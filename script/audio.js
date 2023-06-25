var currentAudio = null;

  function toggleAudio(id, button) {
    var audio = document.getElementById(id);

    if (currentAudio !== null && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.previousElementSibling.textContent = "Play";
    }

    if (audio.paused) {
      audio.play();
      button.textContent = "Pause";
      currentAudio = audio;
    } else {
      audio.pause();
      audio.currentTime = 0;
      button.textContent = "Play";
      currentAudio = null;
    }
  }