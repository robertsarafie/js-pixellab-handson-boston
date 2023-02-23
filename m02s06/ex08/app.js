axios.interceptors.request.use(
  (config) => {
    const { method } = config;

    if (method !== 'post') {
      return config;
    }

    config.data.name = config.data.name.toUpperCase();
    config.data.surname = config.data.surname.toUpperCase();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const displayPersons = (persons = []) => {
  // create ul
  const ul = document.createElement('ul');

  // start loop
  persons.forEach((person) => {
    const { name, surname, skills } = person;
    const li = document.createElement('li');

    li.innerText = `${name} ${surname}`;
    const skillsUl = document.createElement('ul');

    skills.forEach((skill) => {
      const li = document.createElement('li');

      li.innerText = skill;

      skillsUl.append(li);
    });

    li.append(skillsUl);

    ul.append(li);
  });

  // append ul to body
  document.body.append(ul);
};

const getPersons = () => {
  // fetch('http://localhost:8080/persons')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((persons) => {
  //     displayPersons(persons);
  //   });
  axios.get('http://localhost:8080/persons').then((response) => {
    // const persons = response.data;
    const { data: persons } = response;

    displayPersons(persons);
  });
};

getPersons();

document.forms[0].addEventListener('submit', (event) => {
  event.preventDefault();
  // currentTarget => elementul pe care am pus event
  const form = event.currentTarget;
  const formData = new FormData(form);
  const skills = formData.get('skills').trim();
  const skillsArray = [];

  if (skills.length > 0) {
    // html, css, javascript,    node
    skills.split(',').forEach((skill) => {
      skillsArray.push(skill.trim());
    });
  }

  const payload = {
    id: Date.now().toString().slice(-6),
    name: formData.get('name'),
    surname: formData.get('surname'),
    skills: skillsArray,
  };

  // fetch('http://localhost:8080/persons', {
  //   method: 'POST',
  //   body: JSON.stringify(payload),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then(() => {
  //     form.reset();
  //     document.querySelector('form ~ ul').remove();
  //     getPersons();
  //   });
  axios.post('http://localhost:8080/persons', payload).then(() => {
    form.reset();
    document.querySelector('form ~ ul').remove();
    getPersons();
  });
});
