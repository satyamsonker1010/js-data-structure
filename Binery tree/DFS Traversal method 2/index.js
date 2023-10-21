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

  /////// inorder traversal
  inOrder(root) {
    ///root left right
    if (root === null) {
      return [];
    } else {
      let leftTree = this.inOrder(root.left);
      let rightTree = this.inOrder(root.right);
      return [root.value, ...leftTree, ...rightTree];
    }
  }

  preOrder(root) {
    ///left root right
    if (root === null) {
      return [];
    } else {
      let leftTree = this.preOrder(root.left);
      let rightTree = this.preOrder(root.right);
      return [...leftTree, root.value, ...rightTree];
    }
  }

  postOrder(root) {
    if (root === null) {
      return [];
    } else {
      let leftTree = this.postOrder(root.left);
      let rightTree = this.postOrder(root.right);
      return [...leftTree, ...rightTree, root.value];
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
console.log(bt.inOrder(bt.root));
console.log(bt.preOrder(bt.root));
console.log(bt.postOrder(bt.root));
