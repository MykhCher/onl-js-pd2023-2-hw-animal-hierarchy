class Animal {
    move() {
        return "I head to somewhere.";
    }
    say() {
        return "I pass some message.";
    }
    eat() {
        return "I consume something.";
    }
}

class Mammal extends Animal {}

class Bird extends Animal {
    move() {
        return "I fly somewhere.";
    }
    say() {
        return "I sing! The spring is comming <3";
    }
    eat() {
        return "I eat with my beak.";
    }
}
class Fish extends Animal {
    move() {
        return "I swim somewhere.";
    }
    say() {
        return "I remain silent.";
    }
    eat() {
        return "I may eat much, not only plankton.";
    }
}

class Predator extends Mammal {}
class Whale extends Mammal {}
class Primate extends Mammal {}

class Dog extends Predator {
    move() {
        return "I run somewhere on my 4 legs.";
    }
    say() {
        return "I bark!";
    }
    eat() {
        return "I destroy food (and not only food) with my powerful jaws!";
    }
}
class Dolphin extends Whale {
    static maxAge = 40;
    move() {
        return "I glide across the water";
    }
    say() {
        return "I whistle and click.";
    }
    eat() {
        return "I like hunting fish! (yeah, I am not that cute)";
    }
}
class Human extends Primate {
    move() {
        return "I go somewhere on my 2 legs";
    }
    say() {
        return "I speak clearly!";
    }
    eat() {
        return "I can eat both vegetables and meat.";
    }
}
