const car = {
    brand: "BMW",
    color: "black",
    numberOfKilometers: 0,

    printCarInfo() {
        console.log(`${this.brand} of color ${this.color} with car mileage of ${this.numberOfKilometers}`);
    },
    drive(km) {
        this.numberOfKilometers += km;
    }
}

car.printCarInfo();
car.drive(300);
car.drive(200);
car.printCarInfo()