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
    static maxAge = 50;
    static maxWeight = 800;

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
    static maxAge = 200;
    static maxWeight = 200000;

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
        return `${this.name} runs somewhere on its ${this.limbAmount} legs.`;
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

// Create two objects of each class.

const animal1 = new Animal(1, 'first animal', 1, 4);
const animal2 = new Animal(5, 'second animal', 20, 2);

const mammal1 = new Mammal(2, 'first mammal', 6, 4);
const mammal2 = new Mammal(15, 'second mammal', 20, 2);

const bird1 = new Bird(1, 'first bird', 1, 4);
const bird2 = new Bird(2, 'second bird', 5, 4);

const fish1 = new Fish(2, 'first fish', 1, 0);
const fish2 = new Fish(1, 'second fish', 3, 0);

const predator1 = new Predator(3, 'first predator', 120, 4);
const predator2 = new Predator(5, 'second predator', 5, 4);

const whale1 = new Whale(20, 'first whale', 1, 0);
const whale2 = new Whale(50, 'second whale', 20, 0);

const primate1 = new Primate(1, 'first primate', 35, 4);
const primate2 = new Primate(5, 'second primate', 20, 4);

const dog1 = new Dog(1, 'first dog', 1, 4);
const dog2 = new Dog(5, 'second dog', 20, 4);

const dolphin1 = new Dolphin(1, 'first dolphin', 1, 0);
const dolphin2 = new Dolphin(5, 'second dolphin', 20, 0);

const human1 = new Human(1, 'first human', 1, 4);
const human2 = new Human(5, 'second human', 20, 4);