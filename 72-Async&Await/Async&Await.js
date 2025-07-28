// Async/Await = Async = makes a function to return a promise
//               Await = makes an async function wait for a promise

//               Allows you to write asynchronous code in a synchronous manner     
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue


function feedTheCats() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const feedTheCats = true;
            if (feedTheCats) {
                resolve("You fed the Cats 🐈")
            } else {
                reject("You didn't feed the cats 🐈")
            }
        }, 1500);
    })
}

function cleanTheRoom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanTheRoom = false;
            if (cleanTheRoom) {
                resolve("You cleaned the room 🧹")
            } else {
                reject("You didn't clean the room 🧹")
            }
        }, 2500);
    })
}

function takeOutTheTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takeOutTheTrash = true;
            if (takeOutTheTrash) {
                resolve("You took out the trash 🗑️")
            } else {
                reject("You didn't take out the trash 🗑️")
            }
        }, 500);
    })
}

// feedTheCats().then(value => {console.log(value); return cleanTheRoom()
//              .then(value => {console.log(value); return takeOutTheTrash()
//              .then(value => { console.log(value); console.log("Tasks Finished") }) })})
//              .catch(error => console.error(error));

async function doChores(){
        try{
            const feedCats = await feedTheCats();
        console.log(feedCats);
        const cleanedRoom = await cleanTheRoom();
        console.log(cleanedRoom);
        const trashOut = await takeOutTheTrash();
        console.log(trashOut);
        console.log("Tasks Done")
        }
        catch(error){
            console.error(error);
        }
}

doChores()
