function challenge21() {
  const arrow = document.querySelector('arrow');
  const speed = document.querySelector('speed');

  navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = Math.round(data.coords.speed);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  }, (err) => {
    console.err(err);
    alert('HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!');
  });
}

export { challenge21 };
