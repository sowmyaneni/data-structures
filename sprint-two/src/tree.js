var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  // your code here
  var extend = function(obj, source) {
    for (var key in source){
      obj[key] = source[key]
    }
  };

  newTree.children = []; // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //Create a new node with value
  var node = Tree(value);

  //Create a link
  this.children.push(node);

};

treeMethods.contains = function(target, node = this) {
  //Check for the base case which is if the node === target
  if (node.value === target) {
    return true;
  }
  //Iterate through the children array and pass each child to the base case
  for (var i = 0; i < node.children.length; i++) {
    if (this.contains(target, node.children[i])) {
      return true;
    };
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 //AddChild - O(1);
 //contains - O(n);
 */
