// for loop = reapeat some code a limited amount of time 

// if we want to display the word hello 3 times we do it like this

// within (we have up to 3 statements )
// i is a commn naming convention for counters
// i means index

// for(let i is set for 0;will continue as long as i <=2;then during each iteration  we will increment  i++ by 2 )

        /** 
        for(let i = 0; i <=2; i++){
            console.log("hello");
            // if you    console.log(i); we can see what i is 
        }
        */
       
// ---- if i want to count to 10 

          /**   for(let i = 1; i <= 10; i++){ // if you want to increment by 2 we add i+=2
                
                console.log(i);

            }
            */

// ---- if i want to decrement from 10 

        /*
            for(let i = 10; i > 0; i--){    
                console.log(i);
            }

            console.log("Happy New Year")
        */

// ---- continue and break

// --- with continue we can skip an iteration 

for(let i = 1 ; i <= 20 ; i++){   
    // we skip 13 
    if (i == 13) {
        continue; 
    }
    else{ 
    console.log(i);
   }
}

// -- with break we exit the loop at 13 


