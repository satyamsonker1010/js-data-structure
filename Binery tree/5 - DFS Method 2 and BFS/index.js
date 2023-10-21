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
    if (this.isEmpty()) {
      this.root = node;
    } else {
      return this.insertNode(this.root, node);
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

  //traversel the tree DFS (Method 1);
  inOrder(root) {//root left right
    if (root === null) {
      return;
    } else {
      console.log(root.value);
      this.inOrder(root.left);
      this.inOrder(root.right);
    }
  }

  preOrder(root) {//left root right
    if (root === null) {
      return;
    } else {
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
    }
  }

  postOrder(root) { ///left right root
    if (root === null) {
      return;
    } else {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  //DFS Method 2
  inorderMet2(root) {
    if (root === null) {
      return [];
    } else {
      let left = this.inorderMet2(root.left);
      let right = this.inorderMet2(root.right);
      return [root.value, ...left, ...right];
    }
  }
  preorderMet2(root) {
    if (root === null) {
      return [];
    } else {
      let left = this.preorderMet2(root.left);
      let right = this.preorderMet2(root.right);
      return [...left, root.value, ...right];
    }
  }
  postorderMet2(root) {
    if (root === null) {
      return [];
    } else {
      let left = this.postorderMet2(root.left);
      let right = this.postorderMet2(root.right);
      return [...left, ...right, root.value];
    }
  }

  //BFS
  bfs(root) {
    if (root === null) {
      return;
    } else {
      let queue = [root];
      let output = [];
      while (queue.length) {
        const shift = queue.shift();
        output.push(shift.value);
        if (shift.left) {
          queue.push(shift.left);
        }
        if (shift.right) {
          queue.push(shift.right);
        }
      }
      return output;
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

//bt.inOrder(bt.root);
//bt.preOrder(bt.root);
//bt.postOrder(bt.root);
//console.log(bt.inorderMet2(bt.root));
//console.log(bt.preorderMet2(bt.root));
//console.log(bt.postorderMet2(bt.root));
console.log(bt.bfs(bt.root));
