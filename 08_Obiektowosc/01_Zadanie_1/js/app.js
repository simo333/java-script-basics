class Vehicle {
    run() {
        console.log("run..");
    }
}

class Boat extends Vehicle {
    swim() {
        console.log("swim...");
    }
}

class Plane extends Vehicle {
    fly() {
        console.log("fly..");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("drive..");
    }
}

const b1 = new Boat();
const p1 = new Plane();
const c1 = new Car();

b1.run();
b1.swim();
p1.fly();
c1.drive();