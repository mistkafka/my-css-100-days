
for (let i = 1; i <= 8; i++) {
  let $ball = document.querySelector(`.ball-${i}`);
  let deg = Math.floor(Math.random() * 300);
  $ball.style.transform = `rotate(${deg}deg)`;
}

for (let i = 1; i <= 10; i++) {
  let $ball = document.querySelector(`.droplet-${i}`);
  let deg = Math.floor(Math.random() * 300);
  $ball.style.transform = `rotate(${deg}deg)`;
}
