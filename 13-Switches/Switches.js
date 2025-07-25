// SWITCH = can be an efficent replacement to many else if statements

let day = "pizza";
                        /*
                        if(day == 1){
                            console.log("it is Monday")
                        }
                        else if(day == 2){
                            console.log("it is Tuesday")
                        }
                        else if(day == 3){
                            console.log("it is Wendnesday")
                        }
                        else if(day == 4){
                            console.log("it is Thursday")
                        }
                        else if(day == 5){
                            console.log("it is Friday")
                        }
                        else if(day == 6){
                            console.log("it is Saturday")
                        }
                        else if(day == 7){
                            console.log("it is sunday")
                        }
                        else{
                            console.log(`${day} is not a day`)
                        }*/

/* switch(day){
    case 1:
        console.log("it is Monday")
        break;
        // use break to break out of switch if not it will excute all code
     case 2:
        console.log("it is Tuesday")
        break;     
    case 3:
        console.log("it is Wednesday")
        break;
     case 4:
        console.log("it is Thursday")
        break;     
     case 5:
        console.log("it is Friday")
        break;
    case 6:
        console.log("it is Saturday")
        break;     
    case 7:
        console.log("it is Sunday")
        break;

    default:
        console.log(`${day} is not a day`)
   

}*/

let testScore = 97;
let letterGrade;

switch(true){
    case testScore >=90:
        letterGrade = "A";
     break; 
     case testScore >=80:
        letterGrade = "B";
     break;  
     case testScore >=70:
        letterGrade = "C";
     break;    
     case testScore >=60:
        letterGrade = "D";
     break;  
    default: 
        letterGrade ="F"
}
console.log(letterGrade)