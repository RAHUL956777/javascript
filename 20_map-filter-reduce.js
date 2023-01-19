let arr = [55,59,50,78];
//map() - it create a new array by performing some operation on each array element
let a = arr.map((value, index, array) =>{
    console.log(value, index,array);
    return value + 1;
});
console.log(a);

console.log("filter method")
// filter in array
let arr2 = [100,20,30,40,45,50,56,78,87,79,97];
let a2 = arr2.map((a) =>{
    return a>50;
})
console.log(a2);

// reduce() - reduces an array to a single value
let arr3 = [1,2,3,4,5,6,7,8,9];
let newarr3 = arr3.reduce((h1,h2) =>{
    return h1 + h2;
})
console.log(newarr3);

// another ways

let arr4 = [1,2,3,4,5,6,7,8,9];
let reduce_func = (h1,h2) =>{
    return h1 + h2;
}
let newarr4 = arr3.reduce(reduce_func);
console.log(newarr3);