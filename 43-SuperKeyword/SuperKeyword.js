// super =  a keyword  that is used to call the constructor or access 
//          the properties and methods of a parent (superclass) 
//          this = this object
//          super = the parent

            /**  if not using parent the code would look like this:
                 
            class Animal {
                constructor(){

                }
            }

            class Rabbit extends Animal {

                constructor(name,age,runSpeed){
                    super();
                    this.name = name;
                    this.age = age;
                    this.runSpeed = runSpeed;
                }
            }

            class Fish extends Animal {

                constructor(name,age,swimSpeed){
                    super();
                    this.name = name;
                    this.age = age;
                    this.swimSpeed = swimSpeed;
                }

            }

            class Hawk extends Animal {

                constructor(name,age,flySpeed){
                    super();
                    this.name = name;
                    this.age = age;
                    this.flySpeed = flySpeed;
                }

            }

            */

//! simply without rewriting the same code over and over again,
//! we define it in the parent class (Animal) and then use super() to call it in the child classes (Rabbit, Fish, Hawk).

//! another thing you can do is extend a method from the parent class in the child class.
//? for example, if you want to add a method to the Animal class and use it

class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`the ${this.name} moves at a speed of ${speed}km/h `)
    }
}

class Rabbit extends Animal {

    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`this ${this.name} can run`)
        super.move(this.runSpeed); // using the move method from the Animal class
    }
}

class Fish extends Animal {

    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`this ${this.name} can swim`)
        super.move(this.swimSpeed);
    }

}

class Hawk extends Animal {

    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`this ${this.name} can fly`)
        super.move(this.flySpeed);
    }

}

const rabbit = new Rabbit("rabbit", 2, 30);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

// let's test if it works

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();