# JavaScript HashMap

A custom **HashMap** built from scratch in JavaScript as part of [The Odin Project](https://theodinproject.com) Computer Science curriculum.

## What is a HashMap? (In Simple Terms)

Think of a HashMap like a giant wall of numbered lockers. 

Normally, if you want to find a specific item in a messy list, you have to check every item one by one until you find it. A HashMap solves this by using a **math formula (a hash function)** to turn any label (like `"apple"`) into an exact locker number. 

Because it knows the exact locker number right away, it can store, find, or remove information almost instantly—no matter how big the collection gets.

## What This Project Does

Instead of relying on JavaScript's built-in tools, this project builds the entire storage system behind the scenes:

* **Smart Labeling (`hash`):** Converts text keys into consistent bucket numbers using prime-number math so items spread out evenly.
* **Handling Crowded Lockers (Collisions):** If two different labels end up assigned to the same locker, the system chains them together neatly inside that locker so nothing gets lost.
* **Automatic Expansion (`resize`):** When the lockers get 75% full, the system automatically doubles the number of lockers and reorganizes everything so lookups stay fast.
* **Full Data Controls:** Includes everyday actions to add, update, look up, check, or delete items, as well as list all stored keys and values.

## Project Files

* `hashmap.js` — The main blueprint containing the `HashMap` and `Node` logic.
* `main.js` — A test script that puts the HashMap through real-world scenarios (adding items, updating existing values, forcing the storage to expand, and clearing data).

## How to Run It

1. Make sure you have [Node.js](https://nodejs.org) installed on your computer.
2. Clone or download this folder, open your terminal inside it, and run:

```bash
node main.js
```

You will see the test results print directly in your terminal, showing how the HashMap grows and manages data step by step.