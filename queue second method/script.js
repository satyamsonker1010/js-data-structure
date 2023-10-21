class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  enqueue(item) {
    this.items[this.rear++] = item;
  }

  dequeue() {
    delete this.items[this.front];
    this.front++;
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }
    return this.items[this.front];
  }

  size() {
    return this.rear-this.front;
  }

  print() {
    if (this.isEmpty()) {
      console.log(`Queue is empty.`);
      return null;
    }
    console.log(Object.values(this.items).toString());
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.print();
console.log(queue.peek());
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
console.log(queue.size());

// queue.enqueue(100);
// queue.enqueue(200);
// queue.enqueue(300);
// queue.enqueue(400);
// queue.print();
// console.log(queue.peek());
// queue.dequeue();
// queue.print();
// queue.dequeue();
// queue.print();
// queue.dequeue();
// queue.print();
// queue.dequeue();
// queue.print();
// queue.dequeue();
