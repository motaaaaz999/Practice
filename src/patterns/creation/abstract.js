class Car {
  constructor(color, engine) {
    this.color = color;
    this.engine = engine;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "Bmw":
        return new Car("Blue", "V8");
      case "Ferreri":
        return new Car("Red", "V9");
    }
  }
}

const carFactory = new CarFactory();
carFactory.createCar("Bmw");
