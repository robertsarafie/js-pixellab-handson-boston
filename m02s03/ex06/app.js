/**
 * Folosind codul HTML din exercitiu creeaza un script care
 * atunci cand se apasa butonul, va adauga un paragraf in sectiunea
 * corecta cu textul: “Butonul a fost apasat in aceasta rezolutie.”
 */

const button = document.querySelector('.btn');
const lowTarget = document.querySelector('.low-res');
const midTarget = document.querySelector('.mid-res');
const hightTarget = document.querySelector('.high-res');

const eventHandler = () => {
  const width = window.innerWidth;
  let target = null;

  if (width <= 650) {
    target = lowTarget;
  }

  if (width > 650 && width < 1000) {
    target = midTarget;
  }

  if (width >= 1000) {
    target = hightTarget;
  }

  const p = document.createElement('p');
  p.innerText = 'Butonul a fost apasat in aceasta rezolutie';

  target.append(p);
};

button.addEventListener('click', eventHandler);
