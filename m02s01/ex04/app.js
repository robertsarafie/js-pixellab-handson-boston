class Car {
  areHazardsOn = false;
  areLightsOn = false;

  constructor(
    left = 0,
    top = 0,
    color = 'black',
    tireColor = 'black',
    capColor = 'white',
    bodyColor = color,
    roofColor = color,
  ) {
    this.left = left;
    this.top = top;
    this.color = color;
    this.tireColor = tireColor;
    this.capColor = capColor;
    this.bodyColor = bodyColor;
    this.roofColor = roofColor;

    this.intervalId = -1;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    this.changePosition(this.left, this.top);
    this.createFragment();
    this.changeTireColor(this.tireColor);
    this.changeCapColor(this.capColor);
    this.changeBodyColor(this.bodyColor);
    this.changeRoofColor(this.roofColor);
  }

  createFragment() {
    this.car = this.createElement('div', ['car']);
    this.frame.append(this.car);

    // roof?
    this.carTop = this.createElement('div', ['car__top']);
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    // body
    this.carBody = this.createElement('div', ['car__body']);
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // light back
    this.lightBack = this.createElement('div', ['light', 'light--back']);
    this.carBody.append(this.lightBack);

    // light front
    this.lightFront = this.createElement('div', ['light', 'light--front']);
    this.carBody.append(this.lightFront);

    // wheel back
    this.wheelBack = this.createElement('div', [
      'wheel',
      'car__wheel',
      'car__wheel--back',
    ]);
    this.carBody.append(this.wheelBack);
    this.wheelCapBack = this.createElement('div', ['wheel__cap']);
    this.wheelBack.append(this.wheelCapBack);

    // wheel front
    this.wheelFront = this.createElement('div', [
      'wheel',
      'car__wheel',
      'car__wheel--front',
    ]);
    this.carBody.append(this.wheelFront);
    this.wheelCapFront = document.createElement('div');
    this.wheelCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.wheelCapFront);

    // method chaining
    return this;
  }

  turnLightsOn() {
    // this.lightFront.style.backgroundColor = 'yellow';
    this.lightFront.classList.add('light--on');
    this.areLightsOn = true;

    // method chaining
    return this;
  }

  turnLightsOff() {
    // this.lightFront.style.backgroundColor = 'yellow';
    this.lightFront.classList.remove('light--on');
    this.areLightsOn = false;

    // method chaining
    return this;
  }

  engageBreak() {
    this.lightBack.classList.add('light--on');
    this.areLightsOn = true;

    // method chaining
    return this;
  }

  disengageBreak() {
    this.lightBack.classList.remove('light--on');
    this.areLightsOn = false;

    // method chaining
    return this;
  }

  changePosition(left = 0, top = 0) {
    this.frame.style.left = `${left}px`;
    this.frame.style.top = `${top}px`;

    // method chaining
    return this;
  }

  changeTireColor(tireColor) {
    this.wheelBack.style.backgroundColor = tireColor;
    this.wheelFront.style.backgroundColor = tireColor;

    // method chaining
    return this;
  }

  changeCapColor(capColor) {
    this.wheelCapBack.style.backgroundColor = capColor;
    this.wheelCapFront.style.backgroundColor = capColor;

    // method chaining
    return this;
  }

  changeBodyColor(bodyColor) {
    this.carBody.style.backgroundColor = bodyColor;

    // method chaining
    return this;
  }

  changeRoofColor(roofColor) {
    this.carTop.style.backgroundColor = roofColor;

    // method chaining
    return this;
  }

  createElement(nodeName = '', classListArray = []) {
    const element = document.createElement(nodeName);
    // element.classList.add(...classListArray);

    classListArray.forEach((className) => {
      element.classList.add(className);
    });

    // method chaining
    return element;
  }

  toggleHazards() {
    if (this.areHazardsOn === true) {
      // stop hazards
      clearInterval(this.intervalId);
      this.areHazardsOn = false;
    } else {
      // v2 for "this"
      this.intervalId = setInterval(() => {
        if (this.areLightsOn === true) {
          this.turnLightsOff();
          this.disengageBreak();
        } else {
          this.turnLightsOn();
          this.engageBreak();
        }
      }, 800);
      this.areHazardsOn = true;
    }

    return this;
  }

  render() {
    document.body.append(this.frame);

    // method chaining
    return this;
  }
}

const car = new Car(0, 250, 'red', 'blue', 'green', 'orange', 'violet');
car.render();
