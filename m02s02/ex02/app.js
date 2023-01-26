const $personForm = $('#personForm').on('submit', function (event) {
  event.preventDefault();
  // this -> elementul de DOM
  const $form = $(this);
  const $nameInput = $form.find('input[name="name"]');
  const $surnameInput = $form.find('input[name="surname"]');
  const $ageInput = $form.find('input[name="age"]');
  const $skillInputs = $form.find('input[name^="skill-"]');

  const skills = [];

  $skillInputs.each(function () {
    const $skillInput = $(this);

    skills.push($skillInput.val());
  });

  const person = {
    name: $nameInput.val(),
    surname: $surnameInput.val(),
    age: $ageInput.val(),
    skills,
  };

  renderPerson(person);
});

const $skillButton = $('#skill')
  .next()
  .on('click', function () {
    const $addSkillButton = $(this);
    const $skillInput = $addSkillButton.prev();
    const skillValue = $skillInput.val();

    $skillInput.val('').focus();

    if (skillValue.trim().length < 3) {
      return;
    }

    const $skillsUl = renderSkillsUl(skillValue);
    $addSkillButton.after($skillsUl);
  });

// function functions are hoisted

function renderSkillsUl(skill = '') {
  const cssClass = 'skills-ul';
  let $skillsUl = $(`.${cssClass}`);

  if ($skillsUl.length === 0) {
    $skillsUl = $('<ul>', {
      class: cssClass,
    });
  }

  $('<li>', {
    text: skill,
  }).appendTo($skillsUl);

  $('<input>', {
    value: skill,
    name: `skill-${skill}`,
    type: 'hidden',
  }).appendTo($skillsUl);

  return $skillsUl;
}

function renderPerson(person) {
  const $personDisplay = $('<div>');
  const $personName = $('<h1>', {
    text: `${person.name} ${person.surname}`,
  });
  $personDisplay.append($personName);

  $('<p>', {
    text: `Age: ${person.age}`,
  }).appendTo($personDisplay);

  $personForm.after($personDisplay);
}
