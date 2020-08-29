class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  
  
  
  class BST {
    constructor() {
      this.root = null;
    }
    add(data) {
      let node = this.root;
      if (node === null) {
        this.root = new Node(data);
      } else {
        const searchTree = function(node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } 
        } //end function
        return searchTree(node);
      }//end else
    }//end add method
  }
  
  let bst = new BST
  
  bst.add(15)
  bst.add(10)
  bst.add(50)
  console.log(bst)