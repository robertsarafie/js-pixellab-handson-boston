class Car {
  // v2 syntax
  areLightsOn = false;

  // functia care ruleaza
  // creeam o instanta
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
  ) {
    // this este o referinta catre locatia  in
    // memorie a instantei curente
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;

    // v1 syntax
    this.isTrunkOpen = false;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;

    console.log(this.speed);
  }

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOn();
    // v1 for preserving this:
    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 5 * 1000);
  }
}

const audi = new Car('Audi', 'black', 4, 50);
/**
 * Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3). O poti salva intr-o variabila numita opel.
Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.
Adauga o proprietate numita topSpeed si asigneaza-i valoarea implicita 160.
Adauga o proprietate numita topReverseSpeed si asgineaza-i valoarea implicita -50.
Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza.
Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in care se folosesc proprietatile topSpeed si topReverseSpeed
 */
const opel = new Car('Opel', 'red', 4, 3);

/**
 * Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false.
Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea isTrunkOpen pe true, respectiv false.
Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().
 */

const cars = [audi, opel];
