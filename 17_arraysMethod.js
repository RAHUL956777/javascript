let num = [12,50,55,45,65]
let b = num.toString();//it convert an array to string
console.log(b);

// join() this method is used to join all the elements ushing a seperator
 let c = num.join("_");
 console.log(c);

//  pop() removes last element from the array
let r = num.pop();//pop return the poped element
console.log(num, r);

// push() this method used to push element into array
let p = num.push(99);
console.log(num,r);//push returns new array length

// shift() - removes first element and then return it
let s = num.shift();
console.log(s);//it also modify the original array

// unshift() - adds elements to the begining and return new array length
let u = num.unshift(78);
console.log(u);