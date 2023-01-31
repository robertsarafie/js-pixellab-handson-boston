const $personForm = $('#personForm')
  .on('submit', function (event) {
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

    $form.trigger('reset');
    $form.find('.skills-ul').remove();
    $form.next().remove();

    $form.after(displayPerson(person));
  })
  .on('click', '.delete-skill-button', function () {
    $(this).parent().remove();
  })
  .on('click', '.edit-skill-button', function () {
    const $editSkillButton = $(this);

    $editSkillButton.siblings('.delete-skill-button').hide();
    $editSkillButton.siblings('.skill-label').hide();
    $editSkillButton.siblings('input[name^="skill-"]').prop('type', 'text');
    $editSkillButton.siblings('.cancel-edit-skill-button').show();
    $editSkillButton.siblings('.save-skill-button').show();
    $editSkillButton.hide();
  })
  .on('click', '.cancel-edit-skill-button', function () {
    const $cancelEditSkillButton = $(this).hide();

    $cancelEditSkillButton.siblings('.delete-skill-button').show();
    $cancelEditSkillButton.siblings('.edit-skill-button').show();
    $cancelEditSkillButton
      .siblings('input[name^="skill-"]')
      .prop('type', 'hidden');
    $cancelEditSkillButton.siblings('.skill-label').show();
  })
  .on('click', '.save-skill-button', function () {
    const $saveSkillButton = $(this).hide();
    const $skillInput = $saveSkillButton
      .siblings('input[name^="skill-"]')
      .prop('type', 'hidden');
    const newSkill = $skillInput.val();
    const skillParts = $skillInput.prop('name').split('-');
    skillParts[1] = newSkill;

    $skillInput.prop('name', skillParts.join('-'));

    $saveSkillButton.siblings('.delete-skill-button').show();
    $saveSkillButton.siblings('.edit-skill-button').show();
    $saveSkillButton.siblings('input[name^="skill-"]').prop('type', 'hidden');
    $saveSkillButton.siblings('.skill-label').show();
    $saveSkillButton.siblings('.cancel-edit-skill-button').hide();
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

  const $skillLi = $('<li>')
    .appendTo($skillsUl)
    .append(
      $('<span>', {
        text: skill,
        class: 'skill-label',
      }),
    );

  $('<input>', {
    value: skill,
    name: `skill-${skill}`,
    type: 'hidden',
  }).appendTo($skillLi);

  $('<button>', {
    type: 'button',
    text: 'Delete',
    class: 'delete-skill-button',
  }).appendTo($skillLi);

  $('<button>', {
    type: 'button',
    text: 'Edit',
    class: 'edit-skill-button',
  }).appendTo($skillLi);

  $('<button>', {
    type: 'button',
    text: 'Cancel',
    class: 'cancel-edit-skill-button',
  })
    .hide()
    .appendTo($skillLi);

  $('<button>', {
    type: 'button',
    text: 'Save',
    class: 'save-skill-button',
  }).appendTo($skillLi);

  return $skillsUl;
}

// function renderPerson(person) {
//   const $personDisplay = $('<div>');
//   const $personName = $('<h1>', {
//     text: `${person.name} ${person.surname}`,
//   });
//   $personDisplay.append($personName);

//   $('<p>', {
//     text: `Age: ${person.age}`,
//   }).appendTo($personDisplay);

//   $personForm.next().remove();
//   $personForm.after($personDisplay);
// }

// function displayPersonSkills(person) {
//   if (person.skills.length < 1) {
//     return;
//   }

//   const $skillsContainer = $('<div>');

//   $('<h2>', {
//     text: 'Skills',
//   }).appendTo($skillsDisplay);
//   const $skillsDisplay = $('<ul>').appendTo($skillsContainer);

//   person.skills.forEach(function (skill) {
//     $('<li>', {
//       text: skill,
//     }).appendTo($skillsDisplay);
//   });

//   $personForm.next().append($skillsContainer);
// }

function displayPerson(person) {
  const $personDisplay = $('<div>');

  $personDisplay
    .append(displayPersonDetails(person))
    .append(displayPersonSkills(person));

  return $personDisplay;
}

function displayPersonDetails(person) {
  // creare div
  const $personDetails = $('<div>');
  // creare h1 + append la div
  $('<h1>', {
    text: `${person.name} ${person.surname}`,
  }).appendTo($personDetails);
  // creare p cu text varsta + append la div
  $('<p>', {
    text: `Age: ${person.age}`,
  }).appendTo($personDetails);

  // return div

  return $personDetails;
}

function displayPersonSkills(person) {
  const skills = person.skills;

  if (skills.length < 1) {
    return null;
  }

  // creare div
  const $container = $('<div>');

  // creare h2 + append
  $('<h2>', {
    text: 'Skills',
  }).appendTo($container);

  // creare ul + append
  const $ul = $('<ul>').appendTo($container);

  // bucla cu liuri + append ul
  skills.forEach(function (skill) {
    $('<li>', {
      text: skill,
    }).appendTo($ul);
  });

  // return div
  return $container;
}
