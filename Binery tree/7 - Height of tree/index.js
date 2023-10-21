class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  height(root) {
    if (root === null) {
      return 0;
    } else {
      const leftHeight = this.height(root.left); //1
      const rightHeight = this.height(root.right); //1
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
}

/** 
             10
           /    \
          8      15
        /   \   /   \
       4     9 12    20

inorder(root, left, right) =>  10 8 4 9 15 12 20
preOrder(left, root, right) =>  4 8 9 10 12 15 20
postOrder(left, right, root) =>  4 9 8 12 20 15 10
BFS => 10 8 15 4 9 12 20

*/
const bt = new BinaryTree();
console.log(bt.isEmpty());
bt.insert(10);
bt.insert(15);
bt.insert(8);
bt.insert(4);
bt.insert(20);
bt.insert(9);
bt.insert(12);
console.log(bt.height(bt.root));


