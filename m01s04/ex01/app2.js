var userInput = prompt('Introdu numele utilizatorului');
var referenceText = 'Tony Stark';
var message = '';
var mess01Element = document.getElementById('mess01');
var mess02Element = document.getElementById('mess02');
var mess03Element = document.getElementById('mess03');
// nu am facut ceva bine la astea cu mess01
var text = Text(userInput);
// aici nu cred ca e ok

if (userInput === null || userInput.trim().length === 0) {
  message = 'Nu ai introdus un nume';
} else {
  if (text === referenceText) {
    mess01 = `Numele meu este: ${referenceText}`;
    mess02 = `Numele introdus are ${referenceText.length} caractere`;
  } else if (`${referenceText}`.indexOf('a') > -1) {
    mess03 = `Numele introdus contine|nu contine litera a.`;
  }
}

console.log(message);
messageElement.innerText = message;
// aici ar trebui sa pun sa se afiseze si celalalte mesaje, dar nu inteleg cum...
