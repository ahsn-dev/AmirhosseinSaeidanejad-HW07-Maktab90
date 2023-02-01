let map = new Map();
map.set("name", "john");
console.log("map", map);
// Error: keys.push is not a function keys.push("more");
let keys = map.keys();

console.log("keys", keys);
console.log("type of map: ", typeof map);
console.log("type of keys: ", typeof keys);

// solution1
let keys2 = Array.from(map.keys());
keys2.push("more");
console.log("response", keys2);

// solution2
let keys3 = [...map.keys()];
keys3.push("more");
console.log("response", keys3);
