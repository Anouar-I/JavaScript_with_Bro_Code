// JSON = (JavaScript Object Notation ) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR {value1, value2, value3}  

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object.

//* --------------------- JSON.stringify() ---------------------

/*
            // const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];

            // const person = {
            //     "name": "Spongebob",
            //     "age": 30,
            //     "isEmployed": true,
            //     "hobbies": ["JellyFishing", "Karate", "Cooking"]
            // };

            // const people = [{
            //     "name": "Spongebob",
            //     "age": 30,
            //     "isEmployed": true
            // },
            // {
            //     "name": "Patrick",
            //     "age": 37,
            //     "isEmployed": false  
            // },
            // {
            //     "name": "Squidward",
            //     "age": 45,
            //     "isEmployed": true
            // },
            // {
            //     "name": "Sandy",
            //     "age": 27,
            //     "isEmployed": false
            // }]

            // const jsonString = JSON.stringify(person);

            // console.log(jsonString);
*/

//* --------------------- JSON.stringify() ---------------------


/*
            // const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;

            // const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["JellyFishing", "Karate", "Cooking"]}`;

            // const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
            //     {"name": "Patrick","age": 37,"isEmployed": false },
            //     {"name": "Squidward","age": 45,"isEmployed": true},
            //     {"name": "Sandy","age": 27,"isEmployed": false}]`;

            // const parsedData = JSON.parse(jsonPeople);
            // console.log(parsedData);
*/

//* --------------------- fetch ---------------------

fetch("people.json")
    .then(response => response.json())
  //  .then(value => console.log(value))
  // if you wanted to iterate through all values  then you can follow with .name or age to print specfic value
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    // don't forget to catch the error if it happend
     .catch(error => console.error(error)) ;
