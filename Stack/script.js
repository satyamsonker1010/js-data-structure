class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
    return `${value} added successfully in stack.`;
  }

  pop() {
    console.log( this.items.pop() + " pop successuly from stack.");
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.push(40));
stack.print();
stack.pop();
stack.print();
console.log(stack.peek());
console.log(stack.size());
