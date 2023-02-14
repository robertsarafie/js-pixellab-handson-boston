/**
 * Folosind elementul stage, adauga un event de mouseover care sa afiseze
 * in elementul paragraf mesajul: “Mouseul este pe scena” atunci cand
 * mouseul face hover pe aceasta.
    Folosind mouseout, afiseaza in paragraf mesajul
    “Mouseul nu este pe scena”.
    Afiseaza intr-un alt element de cate ori mouseul a fost pe scena.
 */

const stage = document.querySelector('.stage');
let entriesCounter = 0;
let entriesCounter2 = 0;

const log = (message = '', cssClass = 'log') => {
  let paragraph = document.querySelector(`.${cssClass}`);

  if (paragraph === null) {
    paragraph = document.createElement('p');
    paragraph.classList.add(cssClass);
    document.body.append(paragraph);
  }

  paragraph.innerText = message;
};

stage.addEventListener('mouseover', () => {
  const message = 'Mouseul este pe scena';
  console.log(message);
  log(message);
  log(`Mouseul a fost pe scena de ${++entriesCounter}`, 'entriesCount');
  log2(`Mouseul a atins latura de ${++entriesCounter2}`);
});

stage.addEventListener('mouseout', () => {
  const message = 'Mouseul NU este pe scena';
  console.log(message);
  log(message);
  log2(`Mouseul a atins latura de ${++entriesCounter2}`);
});

const log2 = (message2 = '', cssClass2 = 'log2') => {
  let paragraph2 = document.querySelector(`.${cssClass2}`);

  if (paragraph2 === null) {
    paragraph2 = document.createElement('p');
    paragraph2.classList.add(cssClass2);
    document.body.append(paragraph2);
  }

  paragraph2.innerText = message2;
};
