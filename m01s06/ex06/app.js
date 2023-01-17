function paragraphLog(message = '') {
  const cssClass = 'logs';
  let logContainer = document.querySelector(`.${cssClass}`);
  const paragraphElement = document.createElement('p');

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.className.add(cssClass);
    document.body.append(logContainer);
  }

  paragraphElement.innerText = message;
  logContainer.append(paragraphElement);
}

console.domlog = paragraphLog;

console.log('Apar in documnent');
