import { HashMap } from "./hashmap.js";

const test = new HashMap(); // defaults to loadFactor = 0.75, capacity = 16

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("Initial length (should be 12):", test.length());
console.log("Initial capacity (should be 16):", test.capacity);

// Test overwriting existing keys (should NOT trigger resize!)
test.set("apple", "green");
test.set("banana", "brown");
console.log("After overwrites, length (should still be 12):", test.length());
console.log("After overwrites, capacity (should still be 16):", test.capacity);

// Test triggering resize on the 13th unique item
test.set("moon", "silver");
console.log("After adding moon, length (should be 13):", test.length());
console.log("After adding moon, capacity (should double to 32):", test.capacity);

// Test get, has, remove, keys, values, entries, and clear
console.log("Get apple (should be green):", test.get("apple"));
console.log("Has moon (should be true):", test.has("moon"));
console.log("Remove dog (should be true):", test.remove("dog"));
console.log("Length after remove (should be 12):", test.length());
console.log("All keys:", test.keys());
console.log("All values:", test.values());
console.log("All entries:", test.entries());

test.clear();
console.log("Length after clear (should be 0):", test.length());