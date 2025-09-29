class Car {
  constructor(color, engine) {
    this.color = color;
    this.engine = engine;
  }
}

class SUV extends Car {
  constructor(color, engine, wheels) {
    super(color, engine);
    this.wheels = wheels;
  }
}

const bmw = new SUV("blue", "v8", 4);
