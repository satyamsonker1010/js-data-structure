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
    let node = new Node(value);
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
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  //   Print in dfs
  inOrder(root) {
    ////root left right
    if (root === null) {
      return;
    } else {
      console.log(root.value);
      this.inOrder(root.left);
      this.inOrder(root.right);
    }
  }

  preOrder(root) {
    if (root === null) {
      return;
    } else {
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
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

const bt = new BinaryTree();
bt.insert(10);
bt.insert(8);
bt.insert(12);
bt.insert(7);
bt.insert(9);
bt.insert(11);
bt.insert(13);

console.log(bt.isEmpty());
bt.postOrder(bt.root);
