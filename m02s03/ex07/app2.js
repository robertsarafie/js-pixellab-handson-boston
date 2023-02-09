const button = document.getElementById('matchMedia');
const media = matchMedia('(min-width: 650px)');

const clickHandler = () => {
  alert('Arunca cu alerta');
};

// alt name: viewportChange
const resizeHandler = (matches) => {
  if (matches) {
    button.addEventListener('click', clickHandler);
  } else {
    button.removeEventListener('click', clickHandler);
  }
};

resizeHandler(media.matches);

media.addEventListener('change', (event) => {
  resizeHandler(event.matches);
});
