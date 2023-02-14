const box = document.querySelector('.box');
const controlButton = document.querySelector('.control');
const animationClass = 'animate-class';
const darkButton = document.querySelector('.dark');

setTimeout(() => {
  box.classList.add(animationClass);

  // callback hell
  setTimeout(() => {
    box.classList.remove(animationClass);
  }, 4 * 1000);
}, 2 * 1000);

controlButton.addEventListener('click', (event) => {
  // this nu este elementul pe care e pus handlerul
  const controlButton = event.currentTarget;
  const box = controlButton.previousElementSibling;
  box.classList.toggle(animationClass);

  if (box.classList.contains(animationClass)) {
    // box.classList.remove(animationClass);
    controlButton.innerText = 'Aplica';
  } else {
    // box.classList.add(animationClass);
    controlButton.innerText = 'Elimina';
  }
});

darkButton.addEventListener('click', () => {
  box.setAttribute('style', 'background-color: #000;');
});
