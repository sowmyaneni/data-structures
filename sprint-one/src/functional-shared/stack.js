var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.key = 0;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  return someInstance;
};

var stackMethods = {};
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
  // var tempKey = Object.keys(this.storage)[0];
  // var tempStorage = this.storage[this.key];
  // delete this.storage[tempKey];
  // return tempStorage;


};

stackMethods.size = function() {
  return this.key;

};


