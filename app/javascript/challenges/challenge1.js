function removeTransition(e) {
  if (e.propertyName === 'transform') {
    e.target.classList.remove('playing');
  }
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (audio) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  }
}

function challenge1() {
  window.addEventListener('keydown', playSound)
}

export { challenge1 }
