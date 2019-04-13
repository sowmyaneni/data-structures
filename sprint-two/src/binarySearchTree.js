var BinarySearchTree = function(value) {
    // var obj = {}
    // var root = new Branch(value)
    // obj = Object.create(BinarySearchTreeMethods);
    // obj.root = root;
    // return obj
};

BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
    var branch = new Branch(value)
    
    // if (this.root === null) {
    //     this.root = branch;
    //     return;
    // }

    var currentbranch = this.root;
    
    while (currentbranch) {
        if(currentbranch.value > branch.value ) {
            if (!currentbranch.left) {
                currentbranch.left = branch.value;
            } else{
                currentbranch = currentbranch.left;       
            }   
        } else {
            if (!currentbranch.right) {
                currentbranch.right = branch.value;
            } else{
                currentbranch = currentbranch.right;       
            } 
        }
    }

};

BinarySearchTreeMethods.contains = function(value, branch = this.root) {
    if (branch.value === value) { 
        return true; 
    }

    if (branch.value > value) {
        return this.contains(value, branch.left);
    } else {
        return this.contains(value, branch.right);
    }
};

BinarySearchTreeMethods.depthFirstLog = function(cb) {

};

var Branch = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
