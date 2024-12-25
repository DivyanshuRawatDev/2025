// let message: string;
// console.log(message);

// let number:any = 100;
// number = true

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

// handleError("Code break in middle");

function getSum(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(getSum(2, 3));

function greet(name?: string) {
  return `Hello ${name}`;
}
console.log(greet("Divyanshu"));

let nums = [1, 2, 3, 4];

function getNums(...nums: number[]) {
  return nums;
}

console.log(getNums(1,2,3));

export {};
