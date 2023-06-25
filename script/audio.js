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
      button.classList.remove("fa-play");
      button.classList.add("fa-pause");
      currentAudio = audio;
    } else {
      audio.pause();
      audio.currentTime = 0;
      button.classList.remove("fa-pause");
      button.classList.add("fa-play");
      currentAudio = null;
    }
  }
