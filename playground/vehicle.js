var myVehicle = new Vehicle();
console.log(myVehicle.speed); // 0
myVehicle.accelerate();
console.log(myVehicle.speed); // 1

var myCar = new Car();
console.log(myCar.speed); // 0
myCar.accelerate();
console.log(myCar.speed); // 1
myCar.brake();
console.log(myCar.speed); // 0
