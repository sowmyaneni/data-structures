

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [k,v];
  //check to see if anything is at index
  if(this._storage[index] === undefined) {
    //store key value bucket at this index
    this._storage[index] = [bucket];
    //this._storage[index] = [bucket]
    return;
  } else {
      for (var i = 0; i < this._storage[index].length; i++) {
        if(this._storage[index][i][0] === k){
          this._storage[index][i][1] = v;
          return;
        }
      }
  //push the new key value pair
    this._storage[index].push(bucket);
  }  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage[index])) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if(this._storage[index][i][0] === k){
        return this._storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (Array.isArray(this._storage[index])) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if(this._storage[index][i][0] === k){
        return this._storage[index][i].splice(this._storage[index][i],1);
      }
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
  //insert: average case: O(1), worst case O(n)
  //retrieve: average case: O(1), worst case O(n)
  //remove: average case: O(1), worst case O(n)
 */


