class Animal {
    static maxAge = 100;
    static maxWeight = 1500;

    constructor(age, name, weight, limbAmount) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }

    static isAnimal(obj) {
        return obj instanceof this;
    }

    move() {
        return `${this.name} head to somewhere.`;
    }
    say() {
        return `${this.name} pass some message.`;
    }
    eat() {
        return `${this.name} consume something.`;
    }
}

class Mammal extends Animal {
    static maxAge = 100;
    static maxWeight = 1500;

    constructor(age, name, weight, limbAmount) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }

    static isMammal(obj) {
        return obj instanceof this;
    }
}

class Bird extends Animal {
    static maxAge = 15;
    static maxWeight = 150;

    static isBird(obj) {
        return obj instanceof this;
    }

    constructor(age, name, weight, limbAmount) {
        super(age, name, weight, limbAmount)
    }

    move() {
        return `${this.name} flies somewhere.`;
    }
    say() {
        return `${this.name} sings! The spring is comming <3`;
    }
    eat() {
        return `${this.name} eats with its beak.`;
    }
}
class Fish extends Animal {
    static maxAge = 10;
    static maxWeight = 20;

    constructor(age, name, weight, limbAmount) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }

    static isMammal(obj) {
        return obj instanceof this;
    }

    move() {
        return `${this.name} swims somewhere.`;
    }
    say() {
        return `${this.name} remains silent.`;
    }
    eat() {
        return `${this.name} may eat much, not only plankton.`;
    }
}

class Predator extends Mammal {
    static maxAge = 20;
    static maxWeight = 70;

    constructor(age, name, weight, limbAmount) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }

    static isPredator(obj) {
        return obj instanceof this;
    }
}
class Whale extends Mammal {
    static maxAge = 40;
    static maxWeight = 1500;

    constructor(age, name, weight, limbAmount) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }

    static isWhale(obj) {
        return obj instanceof this;
    }
}
class Primate extends Mammal {
    static maxAge = 100;
    static maxWeight = 300;

    constructor(age, name, weight, limbAmount) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }

    static isPrimate(obj) {
        return obj instanceof this;
    }
}

class Dog extends Predator {
    static maxAge = 20;
    static maxWeight = 70;

    constructor(age, name, weight, limbAmount) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }

    static isDog(obj) {
        return obj instanceof this;
    }


    move() {
        return `${this.name} runs somewhere on its 4 legs.`;
    }
    say() {
        return `${this.name} barks!`;
    }
    eat() {
        return `${this.name} destroy food (and not only food) with its powerful jaws!`;
    }
}
class Dolphin extends Whale {
    static maxAge = 40;
    static maxWeight = 1500;

    constructor(age, name, weight, limbAmount) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }

    static isDolphin(obj) {
        return obj instanceof this;
    }


    move() {
        return `${this.name} glides across the water`;
    }
    say() {
        return `${this.name} whistles and clicks.`;
    }
    eat() {
        return `${this.name} likes hunting fish!`;
    }
}
class Human extends Primate {
    static maxAge = 100;
    static maxWeight = 300;

    constructor(age, name, weight, limbAmount) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }

    static isHuman(obj) {
        return obj instanceof this;
    }


    move() {
        return `${this.name} go somewhere on his/shes 2 legs`;
    }
    say() {
        return `${this.name} speaks clearly!`;
    }
    eat() {
        return `${this.name} can eat both vegetables and meat.`;
    }
}
