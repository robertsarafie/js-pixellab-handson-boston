const button = document.getElementById('clicker');
const removeEventButton = document.getElementById('remove-event');

function clickHandler() {
  alert('Ai apasat butonul!');
}

// Folosind codul de la exercitiul 08,
// numeste functia care ruleaza la click clickHandler
// si foloseste-i numele ca parametru al metodei
// addEventListener in locul celei anonime.
button.addEventListener('click', clickHandler);

// La click pe acest buton nou, foloseste metoda removeEventListener
// al variabilei button si foloseste numele clickHandler ca parametru.
removeEventButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});
