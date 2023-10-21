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

  printBFS(root) {
    if (root === null) {
      return [];
    } else {
      const queue = [root];
      const output = [];
      while (queue.length > 0) {
        const deQueue = queue.shift();
        if (deQueue.left) {
          queue.push(deQueue.left);
        }
        if (deQueue.right) {
          queue.push(deQueue.right);
        }
        output.push(deQueue.value);
      }
      return output;
    }
  }
}

const bt = new BinaryTree();
console.log(bt.isEmpty());
bt.insert(10);
bt.insert(8);
bt.insert(12);
bt.insert(7);
bt.insert(9);
bt.insert(11);
bt.insert(13);
console.log(bt.isEmpty());
console.log(bt.printBFS(bt.root));
