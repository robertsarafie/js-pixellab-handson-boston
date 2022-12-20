/**
 * Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false.
 * Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea isTrunkOpen pe true, respectiv false.
 * Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
 * Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
 * Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().
 */

const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  stop: function () {
    this.speed = 0;
  },
  setSpeed: function (speed) {
    if (speed >= this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed <= this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();
    // this solution - v1
    // pre 2016
    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 6000);
  },
};

console.warn(`
  Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".
`);
console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

console.warn(`
  Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".
`);
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
console.log(`Viteza noua este ${car.speed} km/h.`);
