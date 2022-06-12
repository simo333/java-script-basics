class Duck {
    constructor(type) {
        this.type = type;
    }

    sound() {
        console.log("Quack quack");
    }

    swim() {
        console.log("I'm swimming...");
    }

    print() {
        console.log(`Looks like ${this.type} duck`);
    }
}

const donaldDuck = new Duck("ordinary");
donaldDuck.sound();
donaldDuck.swim();
donaldDuck.print();

class WildDuck extends Duck {
    constructor() {
        super("wild");
    }
}

const daffyDck = new WildDuck();
daffyDck.sound();
daffyDck.swim();
daffyDck.print();

class MallardDuck extends Duck {
    constructor() {
        super("mallard");
    }
}

const daisyDuck = new MallardDuck();
daisyDuck.sound();
daisyDuck.swim();
daisyDuck.print();

class RubberDuck extends Duck {
    constructor() {
        super("rubber");
    }

    fly() {
        console.log(`${this.type} ducks can't fly!`);
    }
}

const howardTheDuck = new RubberDuck();
howardTheDuck.sound();
howardTheDuck.swim();
howardTheDuck.fly();
howardTheDuck.print();