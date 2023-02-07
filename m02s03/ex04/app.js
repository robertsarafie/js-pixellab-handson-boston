const image = document.querySelector('.image');

console.log(image.complete);

const log = (message = '', cssClass = 'log') => {
  let p = document.querySelector(`.${cssClass}`);

  if (p === null) {
    p = document.createElement('p');
    p.classList.add(cssClass);
    document.body.prepend(p);
  }

  p.innerText = message;
};

log('Imaginea se incarca...');

// log('Imaginea s-a incarcat');
// image.addEventListener('load', () => {
//   log('Imaginea s-a incarcat');
// });

// history DOM level 0
image.onload = () => {
  // add event handler
  log('Imaginea s-a incarcat');
};
