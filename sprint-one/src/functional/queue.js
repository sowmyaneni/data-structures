 var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;

  };

  someInstance.dequeue = function() {
    var tempKey = Object.keys(storage)[0];
    var tempStorage = storage[tempKey];
    delete storage[tempKey];
    // if (key > 0) {
    //   key--;
    // }
    return tempStorage;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
