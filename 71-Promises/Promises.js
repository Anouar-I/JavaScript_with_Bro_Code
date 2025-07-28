// Promise = An Object that manges asynchronous operations.
//           Wrap a Promise Object around {asynchronous code} 
//           "I Promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. FEED THE CATS
// 2. CLEAN THE ROOM
// 3. TAKE OUT THE TRASH

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
            if(cleanTheRoom){
                resolve("You cleaned the room 🧹")
            }else{
                reject("You didn't clean the room 🧹")
            }
        }, 2500);
    })
}

function takeOutTheTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takeOutTheTrash = true;
            if(takeOutTheTrash){
                resolve("You took out the trash 🗑️")
            }else{
                reject("You didn't take out the trash 🗑️")
            }
        }, 500);
    })
}

feedTheCats().then(value => {
    console.log(value); return cleanTheRoom()
        .then(value => {
            console.log(value); return takeOutTheTrash()
                .then(value => { console.log(value); console.log("Tasks Finished") })
        })
}).catch(error => console.error(error));

