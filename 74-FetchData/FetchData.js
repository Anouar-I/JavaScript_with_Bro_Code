// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and 
//         used for interaction with APIs to retrive and send 
//         data asynchronously over the web
//         fetch(url, {options})
//         fetch(url, {method: "REST: GET,POST,PUT,DELETE"})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error));

//* we can use async to fetch the data 

fetchData();

async function fetchData(){

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok) {
            throw new Error("Could not fetch resource!");
    }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    }
    catch(error) {
        console.error(error);
    }

}