const button = document.getElementsByClassName('btn')[0];
const breakPoint = 650;
// function expression are NOT hoisted
const clickHandler = () => {
  alert('Butonul a fost apasat');
};

const resizeHandler = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth < breakPoint) {
    button.removeEventListener('click', clickHandler);
  }

  if (windowWidth >= breakPoint) {
    button.addEventListener('click', clickHandler);
  }
};
window.addEventListener('resize', resizeHandler);

document.addEventListener('DOMContentLoaded', resizeHandler);
