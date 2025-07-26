// Inheritance = allows a new class to inherit properties and methods 
//              from an existing class ( parent -> child )
//              helps with code reusability and organization

class Animal {
    alive = true;

    eat() {
        console.log(`this ${this.name} is eating`);
    }

    sleep() {
        console.log(`this ${this.name} is sleeping`);
    }

}

class Rabbit extends Animal {
    name = "rabbit";

    run() {
        console.log(`this ${this.name} is running`)
    }
}

class Fish extends Animal {
    name = "fish";

    swim() {
        console.log(`this ${this.name} is swimming`)
    }
}

class Hawk extends Animal {
    name = "hawk";
    fly() {
        console.log(`this ${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// rabbit.alive = false; 

console.log(rabbit.alive);

rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();
fish.swim();

hawk.eat();
hawk.sleep();
hawk.fly();

// our classes all inherit the animal parent class
// helps with code reusability
// so not to declare the same methods in each class

// the children can have their own unique properties and methods too.