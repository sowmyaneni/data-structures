

// Instantiate a new graph
var Graph = function() {
    this.nodes = [];
    this.edges = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.nodes.push(node);
    this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    return this.nodes.includes(node);

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    this.nodes.splice(this.nodes.indexOf(node), 1);
    for (var key in this.edges) {
        for (var i = 0; i < this.edges[key].length; i++) {
            this.edges[key].splice(this.edges[key].indexOf(node), 1);
        }
    }
    delete this.edges[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    return this.edges[fromNode].includes(toNode);

    // if (this.edges[fromNode].length > 0) {
    //     return this.edges[fromNode].includes(toNode);
    // }
    // return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.edges[fromNode].push(toNode);
    this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    this.edges[fromNode].splice(this.edges[fromNode].indexOf(toNode), 1);
    this.edges[toNode].splice(this.edges[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for (var i = 0; i < this.nodes.length; i++) {
        cb(this.nodes[i]);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
    //addNodes: O(1)
    //contains: O(n)
    //removeNodes: O(n^3)
    //hasEdge: O(n)
    //addEdge: O(1)
    //removeEdge: O(n)

 */


