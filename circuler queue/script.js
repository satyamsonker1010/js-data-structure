class CirculerQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  enqueue(value) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = value;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }else{
        return console.log("Queue is already full.");
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return console.log("Queue is empty");
    } else {
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength -= 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  }

  print() {
    if (this.isEmpty()) {
      return console.log("Queue is Empty.");
    } else {
      let i ,
        str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }

}

const cq = new CirculerQueue(5);
console.log(cq.isEmpty());
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
cq.print();
console.log(cq.dequeue())
cq.print();
cq.enqueue(90);
cq.print();
console.log(cq.dequeue())
console.log(cq.dequeue())
cq.enqueue(55);
cq.enqueue(65);
cq.print();
console.log(cq);


