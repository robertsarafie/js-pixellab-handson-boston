const myList = document.getElementsByTagName('ul')[0];
const heading = document.querySelector('h1');
const threshold = 500;

const clickHandler = (event) => {
  // this este referinta la obiectul de DOM
  // dar nu in arrow function
  const heading = event.currentTarget;
  // currentTarget = elementul pe care a fost rulat
  // addEventListener
  const ul = heading.nextElementSibling;
  const display = ul.style.display;

  if (display === 'block') {
    ul.style.display = 'none';
  } else {
    ul.style.display = 'block';
  }
};

const resizeHandler = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth <= threshold) {
    // mobile
    myList.style.display = 'none';
    heading.addEventListener('click', clickHandler);
  }

  if (windowWidth > threshold) {
    // desktop
    myList.style.display = 'block';
    heading.removeEventListener('click', clickHandler);
  }
};

resizeHandler();

window.addEventListener('resize', resizeHandler);
