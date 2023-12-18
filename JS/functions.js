// Function to calculate the factorial of a number
function factorial(num) {
   if (num < 0) {
      return 'Error: Number must be non-negative';
   }
   if (num === 0) {
      return 1;
   }
   return num * factorial(num - 1);
}

// Function to calculate the sum of all numbers from 1 to a given number
function sum(num) {
   if (num < 0) {
      return 'Error: Number must be non-negative';
   }
   let sum = 0;
   for (let i = 1; i <= num; i++) {
      sum += i;
   }
   return sum;
}

// Function to calculate the sum of the squares of all numbers from 1 to a given number
function sumOfSquares(num) {
   if (num < 0) {
      return 'Error: Number must be non-negative';
   }
   let sum = 0;
   for (let i = 1; i <= num; i++) {
      sum += i * i;
   }
   return sum;
}

// Function to calculate the square of the sum of all numbers from 1 to a given number
function squareOfSum(num) {
   if (num < 0) {
      return 'Error: Number must be non-negative';
   }
   let sum = 0;
   for (let i = 1; i <= num; i++) {
      sum += i;
   }
   return sum * sum;
}

// Function to calculate the sum of the cubes of all numbers from 1 to a given number
function sumOfCubes(num) {
   if (num < 0) {
      return 'Error: Number must be non-negative';
   }
   let sum = 0;
   for (let i = 1; i <= num; i++) {
      sum += i * i * i;
   }
   return sum;
}


const x = red
const color = x > 10 ? 'red' : 'blue';

function addNumbers(n1, n2) {
   console.log(n1, n2);
}

console.log(addNumbers(1, 2));