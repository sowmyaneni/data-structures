var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.key = 0;
  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

queueMethods.dequeue = function() {
  var tempKey = Object.keys(this.storage)[0];
  var tempStorage = this.storage[tempKey];
  delete this.storage[tempKey];
  return tempStorage;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


