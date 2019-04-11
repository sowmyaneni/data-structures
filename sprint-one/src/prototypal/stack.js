var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.key = 0
  return someInstance;
};

stackMethods = {}; // Do I need this?
stackMethods.push = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

stackMethods.pop = function() {
  if (this.key >= 0) {
    delete this.storage[this.key];
  }
  if (this.key > 0) {
    this.key--;
  }
  return this.storage[this.key];
};

stackMethods.size = function() {
  return this.key;
};

var test = Stack();
test.pop();