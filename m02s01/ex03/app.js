const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 140,
  topReverseSpeed: -5,
  // areLightsON: false,
  // trebuia si asta? proprietatea booleana este numa cu =?
  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate() {
    this.setSpeed(this.speed + 1);
  },

  decelerate() {
    this.setSpeed(this.speed - 1);
  },

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;

    this.displaySpeed();
  },

  turnLightsOn() {
    this.areLightsON = true;
  },

  turnLightsOff() {
    this.areLightsON = false;
  },

  flashLights() {
    this.turnLightsOn();
    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 5 * 1000);
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 140;
audi.topReverseSpeed = -5;
audi.areLightsON = false;
audi.setSpeed(140);
audi.accelerate();
