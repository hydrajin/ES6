const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  console.log(a, b); // 1 2
  console.log(arr); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
