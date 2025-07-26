// Nesteed Objects = Objects inside of other Objects.
//                   Allows you to represent more complex data structures
//                   Child objects is enclosed by a parent Object

//                  Person{Adress{},ContactInfo{}}                  
//                  ShoppingCart{Keyboard{},Mouse{},Moniter{}}                  


        /*
         const person = {
        //     fullName : "Spongebob Squarepants",
        //     age : 30,
        //     isStudent : true,
        //     hobbies : ["Karate","jelly fishing","cooking"],
        //     address : {
        //         street : "124 conch St.",
        //         city : "Bikini Bottom",
        //         country : "Int. Water"
        //     }
        // }
        
        
        // console.log(person.fullName);
        // console.log(person.age);
        // console.log(person.isStudent);
        // console.log(person.hobbies[0]);
        // console.log(person.address.street);
        // console.log(person.address.city);
        // console.log(person.address.country);
        

        // you can make a for loop to call them all 

        for (const property in person.address){
            console.log(person.address[property]);
        }
        */

// we will make a class that uses nested object 

class Person{

    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

// in this case our address is the child object to person object

class Address{
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;

    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.",
                                            "Bikini Bottom",
                                            "Int. Waters")

const person2 = new Person("Patrick", 37, "128 Conch St.",
                                            "Bikini Bottom",
                                            "Int. Waters")

const person3 = new Person("Squidward", 45, "126 Conch St.",
                                            "Bikini Bottom",
                                            "Int. Waters")

console.log(person3.name);
console.log(person3.age);
console.log(person3.address.country);
