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

  //// Search Element
  search(root, value) {
    if (root === null) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  searchMet2(root, value) {
    let queue = [root];
    let status = false;

    while (queue.length) {
      const shift = queue.shift();
      status = shift.value === value && true 
      if (status) {
        break;
      }
      if (shift.left) {
        queue.push(shift.left);
      }
      if (shift.right) {
        queue.push(shift.right);
      }
    }
    return status;
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
const bt = new BineryTree();
bt.insert(10);
bt.insert(15);
bt.insert(8);
bt.insert(4);
bt.insert(20);
bt.insert(9);
bt.insert(12);

console.log(bt.searchMet2(bt.root, 100));
