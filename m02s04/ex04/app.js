document.addEventListener('DOMContentLoaded', () => {
  const personForm = document.getElementById('personForm');
  const inputButton = personForm.querySelector('button[type="submit"]');

  const pristine = new Pristine(personForm);
  const isValid = pristine.validate(true);

  if (!isValid) {
    inputButton.disabled = true;
  }

  personForm.addEventListener('input', (event) => {
    // event.target > elementul de pe care a plecat evenimentul
    const target = event.target;

    if (!target.name || target.name.length <= 0) {
      return;
    }

    const isValid = pristine.validate(true);

    inputButton.disabled = !isValid;
  });

  personForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // event.currentTarget > elementul pe care
    // am rulat addEventListener
    const form = event.currentTarget;

    console.log('send to server', {
      name: form.name.value,
      surname: form.surname.value,
      age: form.age.value,
      email: form.email.value,
    });
  });
});
