var number = prompt('Introdu un numar');
var message = '';
var messageElement = document.getElementById('message');

if (number % 2 === 0) {
  message = 'Numarul este par';
} else {
  message = 'Numarul este impar';
}

console.log(message);
messageElement.innerText = message;
