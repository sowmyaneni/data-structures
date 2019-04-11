class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;
  }

  enqueue(value) {
    this.storage[this.key] = value;
    this.key++;
  }

  dequeue() {
    var tempKey = Object.keys(this.storage)[0];
    var tempStorage = this.storage[tempKey];
    delete this.storage[tempKey];
    return tempStorage;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
