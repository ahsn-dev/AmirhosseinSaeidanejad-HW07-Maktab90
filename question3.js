let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  console.log([...new Set(arr)]);
}

unique(values); // [Hare, Krishna, :-O]
