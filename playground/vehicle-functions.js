function Vehicle() {
  this.speed = 0;
  this.accelerate = function() {
    this.speed++;
  };
}

function Car() {
  Vehicle.apply(this);
  this.brake = function() {
    this.speed--;
  };
}
