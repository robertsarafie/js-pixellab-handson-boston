const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent.toLowerCase();
let message = 'Nu stim ce browser folosesti';

if (userAgentString.includes('chrome')) {
  message = 'Navighezi folosind Chrome';
  browserName = 'Chrome';
}

if (userAgentString.includes('firefox')) {
  message = 'Navighezi folosind Firefox';
  browserName = 'Firefox';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);

setTimeout(() => {
  const userName = prompt(`${browserName} vrea sa stie cum te cheama`);
  const headingElement = document.createElement('h1');
  headingElement.innerText = `Salut ${userName}!`;

  document.body.append(headingElement);

  // callback hell
  setTimeout(() => {
    paragraphElement.remove();
  }, 1000 * 3);
}, 1000 * 3);
