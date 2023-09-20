let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.push(10);
arr.pop();
arr.unshift(10);
arr.shift();
arr.includes(1);
console.log(arr.includes(100));
console.log(arr.indexOf(200));

console.log(arr.join("-"));

let clices = arr.slice(1, 3);
console.log(clices);
console.log(arr);

let splics = arr.splice(1, 3);
console.log(splics);
console.log(arr);
