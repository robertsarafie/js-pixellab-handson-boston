class Car {
  constructor(left = 0, top = 0, color = 'black') {
    this.left = left;
    this.top = top;
    this.color = color;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    this.changePosition(this.left, this.top);

    this.createFragment();
  }

  createFragment() {
    this.car = this.createElement('div', ['car']);
    this.frame.append(this.car);

    // roof?
    this.carTop = document.createElement('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    // body
    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // light back
    this.lightBack = this.createElement('div', ['light', 'light--back']);
    this.carBody.append(this.lightBack);

    // light front
    this.lightFront = document.createElement('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    // wheel back
    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.wheelCapBack = document.createElement('div');
    this.wheelCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.wheelCapBack);

    // wheel front
    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.wheelCapFront = document.createElement('div');
    this.wheelCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.wheelCapFront);
  }

  turnLightsOn() {
    // this.lightFront.style.backgroundColor = 'yellow';
    this.lightFront.classList.add('light--on');
  }

  turnLightsOff() {
    // this.lightFront.style.backgroundColor = 'yellow';
    this.lightFront.classList.remove('light--on');
  }

  changePosition(left = 0, top = 0) {
    this.frame.style.left = `${left}px`;
    this.frame.style.top = `${top}px`;
  }

  createElement(nodeName = '', classListArray = []) {
    const element = document.createElement(nodeName);
    // element.classList.add(...classListArray);

    classListArray.forEach((className) => {
      element.classList.add(className);
    });

    return element;
  }

  render() {
    document.body.append(this.frame);

    // method chaining
    return this;
  }
}

const car = new Car(0, 250, 'red');
car.render();

// de terminat procesul de createElement
