const button = document.getElementById('query');
var paragraphElement = document.getElementById('message');

button.addEventListener('click', function () {
  var age = prompt('Varsta ta?');

  console.log(`Ai ${age} ani.`);
  paragraphElement.innerText = `Ai ${age} ani.`;
});
