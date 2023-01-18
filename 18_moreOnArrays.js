let arr = [10,20,30,40,50,60,70];
delete arr[0];
console.log(arr, arr.length);

// q1: if i'm delete an array element from an array then if we try to find the length of array what should happend   -----ans is ---- it will return the same array length before we deleted

let arrMore = [80,90,100,110,120,130,140,150,160,170,180,190];

// concat method help us to concat two arrays and then it will return new array
let new_Arr = arr.concat(arrMore);//odesnot change existing array
console.log(new_Arr);

// sort() this method is used to sort an array alphabetically
let s = [1,5,2,50,20,30,90,40];
s.sort();//it modify the original array
console.log(s);

let compare = (a,b) => {
    return a-b; 
}

let compare1 = (a,b) => {
    return b-a;//it's used for assending order
}

let assen = [50,20,10,55,90,66];
assen.sort(compare);
console.log(assen);
assen.sort(compare1);
console.log(assen);
// reverse()
assen.reverse();//it is used to see the array in reverse order
console.log(assen);

// splice() ---- it is used to add new element in array
//  it takes 3 input 1--from where it start.. 2--how many data will be deleted.. 3--new element which wouls be added here
let sp = [20,40,30,10,90,50];
let deletedValues = sp.splice(2, 2, 550, 990);
console.log(sp);//it returns deleted array and modify source array
console.log(deletedValues);//it returns the deleted values from the array and its type is object

//  slice() ---- slice out a pieace fro  an array it creates a new array
console.log("Slice")
let newssp = sp.slice(3);//it prints index no 3, upto last 
console.log(newssp);
let newsp= sp.slice(3, 4);//it prints index no 3 to 4
console.log(newsp);