let num = [2,30,50,60,55];

for(let i = 0; i<num.length;i++){
    console.log(num[i]);
};

console.log("forEach Loop");

num.forEach((element) =>{
    console.log(element * element);
});

// Array from --- it is used to create an array from any other object
let nm = "Rahul";
let arr = Array.from(nm);
console.log(arr);

// for of
for(let i of num){
    console.log(i);
}

// for in
for(let j in num){
    console.log(j);//it returns the key of an array
}