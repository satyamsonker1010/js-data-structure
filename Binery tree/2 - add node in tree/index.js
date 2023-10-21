class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.insertNode(this.head, node);
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
        thiss.insertNode(root.right, node);
      }
    }
  }
}


const bst = new BST();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst);