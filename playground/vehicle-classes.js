class Vehicle {
  constructor() {
    this.speed = 0;
  }
  accelerate() {
    this.speed++;
  }
}

class Car extends Vehicle {
  brake() {
    this.speed--;
  }
}
