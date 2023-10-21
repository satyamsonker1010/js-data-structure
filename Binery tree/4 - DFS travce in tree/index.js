class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BineryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  //insert node in the tree
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
  //traverse the tree
  // inorder traverse  root left right

  inorder(root) {
    if (root === null) {
      return;
    } else {
      console.log(root.value);
      this.inorder(root.left);
      this.inorder(root.right);
    }
  }
  preorder(root) {
    if (root === null) {
      return;
    } else {
      this.preorder(root.left);
      console.log(root.value);
      this.preorder(root.right);
    }
  }

  postOrder(root) {
    if (root === null) {
      return;
    } else {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

const bt = new BineryTree();

bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(3);
bt.postOrder(bt.root);
