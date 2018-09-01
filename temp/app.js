
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

function criarCirculo() {
  const snow = document.querySelector('#snow');
  const svgNS = 'http://www.w3.org/2000/svg';
  const myCircle = document.createElementNS(svgNS, 'circle');

  myCircle.setAttributeNS(null, 'r', Math.floor(Math.random() * 5) + 2);
  myCircle.setAttributeNS(null, 'cx', Math.floor(Math.random() * windowWidth));
  myCircle.setAttributeNS(null, 'cy', -10);
  myCircle.setAttributeNS(null, 'fill', `rgba(255,255,255, .3)`);

  myCircle.animate([
    { transform: 'translateY(0)'  },
    { transform: `translateY(${windowHeight + 50}px)` }
    ], 
    {
      duration: 30000,
      delay: Math.floor(Math.random() * 40000),
      iterations: Infinity
  });
  
  snow.appendChild(myCircle);
}

for(let i = 0; i < (windowWidth / 8); i++) {
  criarCirculo(i);
}
