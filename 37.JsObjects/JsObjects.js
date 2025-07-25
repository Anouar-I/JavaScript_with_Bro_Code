// Object = is a collection of related and/or methods 
//          can represent real world objects (people,products,places)
//          Objects = {key:value,
//                      function()}

// we will create a person1 object

const person1 =  {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am  Spongebob")},
    eat: function(){console.log("I am eating a Krabby Patty!")},
}
// obejects can't have the same name 
// the properties mimick real worl attributes of a person like name age ....


const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function(){console.log("Hi! I'm Patrick ..." )},
    eat: () => console.log("I am eating roast beef, chiken, and pizza"),
}
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person2.sayHello();
person2.eat();


