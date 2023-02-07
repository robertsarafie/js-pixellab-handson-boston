class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = 150;
    this.topReverseSpeed = -80;
  }

  accelerate(deltaSpeed = 1) {
    this.speed = this.speed + deltaSpeed;

    return this;
  }

  decelerate(deltaSpeed = 1) {
    this.speed = this.speed - deltaSpeed;

    return this;
  }

  // implementarea binecunoscutei metode
  // setSpeed + protectiile de supra si subaccelerare
  // + chaining
}

const audi = new Car('Audi', 'black', 4, 50);

audi.accelerate();
