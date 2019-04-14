var BinarySearchTree = function(value) {
    var obj = {}
    obj = Object.create(BinarySearchTreeMethods);
    obj.value = value;
    obj.left = null;
    obj.right = null;
    return obj;
};

// var Branch = function(value){
//     this.value = value;
//     this.left = null;
//     this.right = null;
// }

BinarySearchTreeMethods = {}

BinarySearchTreeMethods.insert = function(value) {
    var branch = BinarySearchTree(value)

    if(this.value > branch.value){
        if(!this.left){
            this.left = branch
            return;
        } else {
            this.left.insert(value)
        }

    } else {
        if(!this.right){
            this.right = branch
            return;
        } else {
            this.right.insert(value)
        }
    }
    // Insertion using while loop below
    // while (currentbranch) {
    //     if(currentbranch.value > branch.value ) {
    //         if (!currentbranch.left) {
    //             currentbranch.left = branch;
    //             return;
    //         } else{
    //             currentbranch = currentbranch.left;       
    //         }   
    //     } else {
    //         if (!currentbranch.right) {
    //             currentbranch.right = branch;
    //             return;
    //         } else{
    //             currentbranch = currentbranch.right;       
    //         } 
    //     }
    // }

};



BinarySearchTreeMethods.contains = function(value) {
    if (this.value === value) { 
        return true; 
    }

    if (this.left && this.value > value) {
        return this.left.contains(value);
    } else if (this.right) {
        return this.right.contains(value);
    }

    return false;
};

BinarySearchTreeMethods.depthFirstLog = function(cb)  {
    // if left and right both equal null
    cb(this.value);

    if(this.left !== null) { 
        this.left.depthFirstLog(cb);
    }
    if(this.right !== null){
        this.right.depthFirstLog(cb);
    }

};

var newTree = BinarySearchTree(3);

/*
 * Complexity: What is the time complexity of the above functions?
 //insert O(log n)
 //contains O(log n)
 //depthFirstLog O(log n)
 */
