const display = document.getElementById('display');
  const pads = document.querySelectorAll('.pad');
  const powerToggle = document.getElementById('powerToggle');
  const volumeControl = document.getElementById('volumeControl');

  function playSound(pad) {
    if (!powerToggle.checked) {
      display.textContent = 'Power OFF';
      return;
    }
    const soundId = pad.dataset.sound;
    const audio = document.getElementById(soundId);
    if (audio) {
      audio.currentTime = 0;
      audio.volume = volumeControl.value;
      audio.play();
      display.textContent = soundId;
      pad.classList.add('playing');
      setTimeout(() => pad.classList.remove('playing'), 100);
    }
  }

  pads.forEach(pad => {
    pad.addEventListener('click', () => playSound(pad));
  });

  window.addEventListener('keydown', e => {
    const key = e.key.toUpperCase();
    const pad = document.querySelector(`.pad[data-key="${key}"]`);
    if (pad) playSound(pad);
  });