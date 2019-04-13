var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //Create new node by calling the Node function
    var newNode = Node(value);
  
    if (list.head === null) {
       list.head = newNode;
    } else {
      list.tail.next = newNode;
    }

    list.tail = newNode;

  };

  list.removeHead = function() {
    var results = list.head.value;
    if(list.head){
      list.head = list.head.next;
      return results;
    }
  };

  list.contains = function(target, node) {
    
    // var node = list.head; talk about this
    var node = (arguments[1] || list.head)

    if(node.value === target){
      return true;
    }

    if(node.next !== null){
      return list.contains(target, node.next)
    }

    return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 //contains: O(n);
 //AddToTail : O(1);
 //RemoveHead: O(1);
 */


 // 