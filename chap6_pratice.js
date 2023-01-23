/*
q1--write a orogram to manage prompt function to take input of age 
as a value from the user and use alert to tell him if he can drive
*/
let age = prompt("Enter your age: ");
age = Number.parseInt(age);
if(age>18){
    alert("You can drive");
}else{
    alert("You cannot drive now");
}

/*
q2--in question 1 use confirm to ask users if he wants to see the prompt again
*/
/*
IN the previous question use console.error to log the error if the age entered in negative
*/

let runAgain = true;

while(runAgain){
    let age1 = prompt("Enter your age: ");
    age1 = Number.parseInt(age1);
    if(age1 =>0){
        console.error("Please give a valid age");
        break;
    }

    const canDrive = (age1) =>{
        return age1 >= 18 ? true : false
    }
    if(canDrive(age1)){
        alert("You can drive");
    }else{
        alert("You cannot drive now");
    }
    runAgain =  confirm("Do you want to this Run Again");
}

/*
write a program to change the url to google.com
(Redirection) if users enters a number grater than 4
*/ 
let num = prompt("Enter the number here: ");
num = Number.parseInt(num);

if(num > 4){
    location.href = "https://google.com";
}

//write a code that change body background color ushing users input
let color = prompt("Enter the page color");
document.body.style.background = color;