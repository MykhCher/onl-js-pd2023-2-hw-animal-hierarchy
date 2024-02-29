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
        super(age, name, weight, limbAmount)
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
        super(age, name, weight, limbAmount)
    }

    static isFish(obj) {
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
        super(age, name, weight, limbAmount)
    }

    static isPredator(obj) {
        return obj instanceof this;
    }
}
class Whale extends Mammal {
    static maxAge = 200;
    static maxWeight = 200000;

    constructor(age, name, weight, limbAmount) {
        super(age, name, weight, limbAmount)
    }

    static isWhale(obj) {
        return obj instanceof this;
    }
}
class Primate extends Mammal {
    static maxAge = 100;
    static maxWeight = 300;

    constructor(age, name, weight, limbAmount) {
        super(age, name, weight, limbAmount)
    }

    static isPrimate(obj) {
        return obj instanceof this;
    }
}

class Dog extends Predator {
    static maxAge = 20;
    static maxWeight = 70;

    constructor(age, name, weight, limbAmount) {
        super(age, name, weight, limbAmount)
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
        super(age, name, weight, limbAmount)
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
        super(age, name, weight, limbAmount)
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

// Test methods output.
console.log('Testing output:')
console.log('===========================');
console.log(animal1);
console.log(
  `Values for ${animal1.constructor.name} class representative (${animal1.name}):`
);
console.log(`Age: ${animal1.age}`);
console.log(`Weight: ${animal1.weight}`);
console.log(`Limbs Amount: ${animal1.limbAmount}`);
console.log(`Max Age: ${Animal.maxAge}`);
console.log(`Max Weight: ${Animal.maxWeight}`);
console.log(`move(): ${animal1.move()}`);
console.log(`say(): ${animal1.say()}`);
console.log(`eat(): ${animal1.eat()}`);
console.log(`isAnimal(): ${Animal.isAnimal(animal1)}`);
console.log('===========================');
console.log(mammal2);
console.log(
  `Values for ${mammal2.constructor.name} class representative (${mammal2.name}):`
);
console.log(`Age: ${mammal2.age}`);
console.log(`Weight: ${mammal2.weight}`);
console.log(`Limbs Amount: ${mammal2.limbAmount}`);
console.log(`Max Age: ${Mammal.maxAge}`);
console.log(`Max Weight: ${Mammal.maxWeight}`);
console.log(`move(): ${mammal2.move()}`);
console.log(`say(): ${mammal2.say()}`);
console.log(`eat(): ${mammal2.eat()}`);
console.log(`isMammal(): ${Mammal.isAnimal(mammal2)}`);
console.log('===========================');
console.log(bird1);
console.log(
  `Values for ${bird1.constructor.name} class representative (${bird1.name}):`
);
console.log(`Age: ${bird1.age}`);
console.log(`Weight: ${bird1.weight}`);
console.log(`Limbs Amount: ${bird1.limbAmount}`);
console.log(`Max Age: ${Bird.maxAge}`);
console.log(`Max Weight: ${Bird.maxWeight}`);
console.log(`move(): ${bird1.move()}`);
console.log(`say(): ${bird1.say()}`);
console.log(`eat(): ${bird1.eat()}`);
console.log(`isBird(): ${Bird.isAnimal(bird1)}`);
console.log('===========================');
console.log(fish2);
console.log(
  `Values for ${fish2.constructor.name} class representative (${fish2.name}):`
);
console.log(`Age: ${fish2.age}`);
console.log(`Weight: ${fish2.weight}`);
console.log(`Limbs Amount: ${fish2.limbAmount}`);
console.log(`Max Age: ${Fish.maxAge}`);
console.log(`Max Weight: ${Fish.maxWeight}`);
console.log(`move(): ${fish2.move()}`);
console.log(`say(): ${fish2.say()}`);
console.log(`eat(): ${fish2.eat()}`);
console.log(`isFish(): ${Fish.isAnimal(fish2)}`);
console.log('===========================');
console.log(dog1);
console.log(
  `Values for ${dog1.constructor.name} class representative (${dog1.name}):`
);
console.log(`Age: $dog12.age}`);
console.log(`Weight: ${dog1.weight}`);
console.log(`Limbs Amount: ${dog1.limbAmount}`);
console.log(`Max Age: ${Dog.maxAge}`);
console.log(`Max Weight: ${Dog.maxWeight}`);
console.log(`move(): ${dog1.move()}`);
console.log(`say(): ${dog1.say()}`);
console.log(`eat(): ${dog1.eat()}`);
console.log(`isDog(): ${Dog.isAnimal(dog1)}`);
console.log('===========================');
console.log(dolphin2);
console.log(
  `Values for ${dolphin2.constructor.name} class representative (${dolphin2.name}):`
);
console.log(`Age: ${dolphin2.age}`);
console.log(`Weight: ${dolphin2.weight}`);
console.log(`Limbs Amount: ${dolphin2.limbAmount}`);
console.log(`Max Age: ${Dolphin.maxAge}`);
console.log(`Max Weight: ${Dolphin.maxWeight}`);
console.log(`move(): ${dolphin2.move()}`);
console.log(`say(): ${dolphin2.say()}`);
console.log(`eat(): ${dolphin2.eat()}`);
console.log(`isDolphin(): ${Dolphin.isAnimal(dolphin2)}`);
console.log('===========================');
console.log(human1);
console.log(
  `Values for ${human1.constructor.name} class representative (${human1.name}):`
);
console.log(`Age: ${human1.age}`);
console.log(`Weight: ${human1.weight}`);
console.log(`Limbs Amount: ${human1.limbAmount}`);
console.log(`Max Age: ${Human.maxAge}`);
console.log(`Max Weight: ${Human.maxWeight}`);
console.log(`move(): ${human1.move()}`);
console.log(`say(): ${human1.say()}`);
console.log(`eat(): ${human1.eat()}`);
console.log(`isHuman(): ${Human.isAnimal(human1)}`);
console.log('===========================');

// boolean static method output check for Human instance.

console.log('\nChecks for boolean static method output.');
console.log(`Instance to check:`);
console.log(human2);
console.log('Output values:');
console.log(`isAnimal(): ${Animal.isAnimal(human2)}`);
console.log(`isMammal(): ${Mammal.isMammal(human2)}`);
console.log(`isBird(): ${Bird.isBird(human2)}`);
console.log(`isFish(): ${Fish.isFish(human2)}`);
console.log(`isPredator(): ${Predator.isPredator(human2)}`);
console.log(`isWhale(): ${Whale.isWhale(human2)}`);
console.log(`isPrimate(): ${Primate.isPrimate(human2)}`);
console.log(`isDog(): ${Dog.isDog(human2)}`);
console.log(`isDolphin(): ${Dolphin.isDolphin(human2)}`);
console.log(`isHuman(): ${Human.isHuman(human2)}`);
