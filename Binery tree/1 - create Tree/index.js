class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(){
        this.head = null;
    }

    isEmpty(){
        return this.head === null
    }
}

const bst = new BST();
console.log(bst.isEmpty());
