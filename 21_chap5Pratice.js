// q1.. create an array of numbers and take input from the users to add numbers to this array
let arr = [1,2,3,4,5,6,7,8,9];
let a = prompt("Enter a number: ");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

// q2.. keep adding numbers to the array in 1 untill 0 is odd to the array
let arr1 = [1,2,3,4,5,6,7,8,9];
do{
let a1 = prompt("Enter a number: ");
a1 = Number.parseInt(a);
arr1.push(a1);
}while(a=!0)

// q3.. filter for numbers divisible by 10 from a given array
let ar = [20,5,50,6,8,90,55,44,30];
let n = ar.filter((x)=>{
    return x%10==0;
})
console.log(n);

// q4.. create an array of square of given numbers
let arrr = [2,5,6,8,40,50,60,7];
let n1 = arrr.map((y)=>{
    return y*y;
})
console.log(n1);

// q5.. Use reduce to calculate factorial of a given number from an array of first n natural numbers(n being the number where factorial needs to be calculated)
let arrrrr = [1,2,3,4,5,6];
let n2 = arrrrr.reduce((x1, x2)=>{
    return x1 * x2;
});
console.log(n2);
