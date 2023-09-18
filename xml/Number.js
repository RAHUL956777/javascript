const num = 3.14159;
const fixedNum = num.toFixed(2); // Returns "3.14"

const num1 = 123.456789;
const preciseNum = num1.toPrecision(4); // Returns "123.5"

const num2 = 255;
const binaryStr = num2.toString(2); // Returns "11111111" (binary representation)

const binaryStr1 = "1010";
const decimalNum = parseInt(binaryStr1, 2); // Returns 10 (decimal representation)

const floatStr = "3.14159";
const parsedFloat = parseFloat(floatStr); // Returns 3.14159

const value1 = 42;
const value2 = "hello";
const isValue1NaN = isNaN(value1); // Returns false
const isValue2NaN = isNaN(value2); // Returns true

const num3 = 123;
const num4 = Infinity;
const isNum1Finite = isFinite(num3); // Returns true
const isNum2Finite = isFinite(num4); // Returns false

const str = "3.14";
const num5 = parseFloat(str); // Returns 3.14

const num6 = -42;
const absNum = Math.abs(num6); // Returns 42

const num7 = 3.14;
const roundedUp = Math.ceil(num7); // Returns 4

const num8 = 3.99;
const roundedDown = Math.floor(num8); // Returns

const num9 = 3.49;
const rounded = Math.round(num9); // Returns 3
