// A FIFO collection
class Queue {
  data = [];
  push(item) {
    this.data.push(item);
  }

  pop() {
    return this.data.shift();
  }
}

class NumberQueue extends Queue {
  push(item: number) {
    super.push(item);
  }

  pop(): number {
    return super.pop();
  }
}

const queue = new NumberQueue();
queue.push(123);
queue.push(456);

console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));
