var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.key = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

Stack.prototype.pop = function() {
  if (this.key >= 0) {
    delete this.storage[this.key];
  }
  if (this.key > 0) {
    this.key--;
  }
  return this.storage[this.key];
};

Stack.prototype.size = function() {
  return this.key;
};



