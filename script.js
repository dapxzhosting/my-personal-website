AOS.init({
  duration: 1000,
  once: true
});
document.getElementById('flipEnvelope').addEventListener('click', function () {
  this.classList.toggle('flipped');
});

