// this = a refrence to the object where this is used 
//          (the object depends on the immediate context)
//          person.name = this.name

const person1 = {
    name: "Spongebob",
    favFood :"Hamburgers",
    sayHello:  function () {console.log(`Hi! Am ${this.name}`)},
    eat : function () {console.log(`${this.name} is eating ${this.favFood}`)},
    }


    const person2 = {
        name: "Patrick",
        favFood :"Pizza",
        sayHello:  function () {console.log(`Hi! Am ${this.name}`)},
        eat : function () {console.log(`${this.name} is eating ${this.favFood}`)},
        }
    
    person1.sayHello(); // Hi! Am Spongebob
    person1.eat(); // Hi! Am Spongebob is eating Hamburgers

    person2.sayHello(); // Hi! Am Patrick
    person2.eat(); // Hi! Am Patrick is eating Pizza


    // if you use this outside of an object, it will refer window object

    //! this does not work in arrow functions