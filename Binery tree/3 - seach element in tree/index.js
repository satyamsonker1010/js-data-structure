class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.leftHeight = 0;
    this.rightHeight = 0;
  }
  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (root.value > node.value) {
      //move left tree
      if (root.left === null) {
        root.left = node;
        this.leftHeight++;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      //move right tree
      if (root.right === null) {
        root.right = node;
        this.rightHeight++;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  //Search Node
  searchNode(root, value) {
    if (this.isEmpty()) {
      console.log("Tree is empty");
      return;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.searchNode(root.left, value);
      } else {
        return this.searchNode(root.right, value);
      }
    }
  }
}

const bst = new BST();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(1);
bst.insert(0.5);
bst.insert(20);

console.log(bst.searchNode(bst.root, 0.5));
