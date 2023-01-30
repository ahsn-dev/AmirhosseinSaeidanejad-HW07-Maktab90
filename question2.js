function sortArray(...arr) {
  let temp = [];
  arr.forEach((items) => {
    items.forEach((item) => {
      temp.push(item);
    });
  });
  console.log(temp.sort((b, a) => a - b));
}
console.log(sortArray([5, 6, 2], [3, 7, 1])); // [7,6,5,3,2,1]
console.log(sortArray([5, 6, 2], [3, 7, 1], [2, 4, 8])); // [8,7,6,5,4,3,2,2,1]
