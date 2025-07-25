// How to accept User Input

// 1.EASY WAY = window prompt
// 2.PROFFESSIONAL WAY = html text box


// 1. 
        /*  let username;

        username = window.prompt("what's your username?");

        console.log(username)  */


// .2
        let username;

        document.getElementById("mySubmit").onclick = function(){
            username = document.getElementById("myText").value;
            document.getElementById("myH1").textContent = `Hello ${username}`
            
        }
