/* write a javascript program to generate a random number and store it in a  variable.
The program then takes an input from the users to tell them wheateher the gauss was correct
, greatest or lowest to them the original number
100--(number of gauss) is the score of the users The program is excepted to terminal
once the number is gaused shall be between 0 to 100*/ 

let a = Math.random() * 100;
a = Number.parseInt(a);
let inp;
let score = 100;
while(inp != a){
    score = score-1;
    lnp = prompt("Gauss the number: ")
    if(inp == a){
        console.log("Congradulation! You guess the correct number.");
        console.log(`You guess the actual number in ${100 - score} chances`);
    }
    else if(inp > a && inp < 100){
        console.log("Your number is grater than the actual number.");
    }
    else if(inp < a && inp > 0){
        console.log("your number is smaller than the actual number.");
    }
    else{
        console.log("Enter a number between 1 to 100");
    }
}