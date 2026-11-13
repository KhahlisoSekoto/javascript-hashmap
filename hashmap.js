class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

export class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;
  }

  #checkBounds(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    this.#checkBounds(index);

    let current = this.buckets[index];

    while (current) {
      if (current.key === key) {
        current.value = value;
        return;
      }
      current = current.next;
    }

    if (this.size + 1 > this.capacity * this.loadFactor) {
      this.#resize();
      return this.set(key, value);
    }

    const newNode = new Node(key, value, this.buckets[index]);
    this.buckets[index] = newNode;
    this.size++;
  }

  #resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;

    for (const bucket of oldBuckets) {
      let current = bucket;
      while (current) {
        this.set(current.key, current.value);
        current = current.next;
      }
    }
  }


get(key) {
    const index = this.hash(key);
    this.#checkBounds(index);

    let current = this.buckets[index];
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    this.#checkBounds(index);

    let current = this.buckets[index];
    while (current) {
      if (current.key === key) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    this.#checkBounds(index);

    let current = this.buckets[index];
    let previous = null;

    while (current) {
      if (current.key === key) {
        if (previous === null) {
          this.buckets[index] = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return true;
      }
      previous = current;
      current = current.next;
    }

    return false;
  }


length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;
  }

  keys() {
    const allKeys = [];
    for (const bucket of this.buckets) {
      let current = bucket;
      while (current) {
        allKeys.push(current.key);
        current = current.next;
      }
    }
    return allKeys;
  }

  values() {
    const allValues = [];
    for (const bucket of this.buckets) {
      let current = bucket;
      while (current) {
        allValues.push(current.value);
        current = current.next;
      }
    }
    return allValues;
  }

  entries() {
    const allEntries = [];
    for (const bucket of this.buckets) {
      let current = bucket;
      while (current) {
        allEntries.push([current.key, current.value]);
        current = current.next;
      }
    }
    return allEntries;
  }
}