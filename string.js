const str = "Hello, World!";
const char = str.charAt(7); // Returns 'W'

const charCode = str.charCodeAt(7); // Returns 87 (Unicode value for 'W')


const str1 = "Hello, ";
const str2 = "World!";
const combinedStr = str1.concat(str2); // Returns "Hello, World!"

const index = str.indexOf("World"); // Returns 7


const slicedStr = str.slice(0, 5); // Returns "Hello"


const subStr = str.substring(7, 12); // Returns "World"


const subStr1= str.substr(7, 5); // Returns "World"

const lowerStr = str.toLowerCase();

const upperStr = str.toUpperCase();

const trimmedStr = str.trim();

const fruitsStr = "apple,banana,cherry";
const fruits = fruitsStr.split(","); // Returns ["apple", "banana", "cherry"]


const newStr = str.replace("World", "Universe");

const startsWithHello = str.startsWith("Hello");

const endsWithWorld = str.endsWith("World!");

const containsWorld = str.includes("World"); // Returns true

const matches = str.match(/\$\d+/g); // Returns ["$10", "$15"]

const index1 = str.search(/\$\d+/); // Returns 18

const paddedStr = str.padStart(5, "0"); // Returns "00042"