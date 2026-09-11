// using prompt

// let array = new Array(3);
// for (let i = 0; i < array.length; i++) {
//   array[i] = Number(prompt("Enter a number"));
// }
// console.log(array);

//Sum of aaray

// let arr = [12, 45, 3];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// Find max element from array

// let arr = [85, 36, 78, 100];
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// Find min element from array

// let arr = [85, 36, 78, 100];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(min);

// Find reverse array

// let arr = [1, 2, 3, 4, 5, 6];

// let j = 0;

// let temp = new Array(arr.length);
// for (let i = arr.length - 1; i >= 0; i--) {
//   temp[j] = arr[i];
//   j++;
// }
// console.log(temp);

// Reverse array without spacing

// let arr = [50, 40, 30, 20, 10];
// let i = 0;
// let j = arr.length - 1;
// while (i != j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

// let arr = [1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0];
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr);

// left rotation by 1 element
// let arr = [1, 2, 3, 4, 5];
// let copy = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy;
// console.log(arr);

//Right rotation by 1 element

let arr = [1, 2, 3, 4, 5];
let copy = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = copy;
console.log(arr);
