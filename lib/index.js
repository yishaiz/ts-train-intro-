"use strict";
// A FIFO collection
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
// class NumberQueue extends Queue {
//   push(item: number) {
//     super.push(item);
//   }
//   pop(): number {
//     return super.pop();
//   }
// }
// const queue = new Queue();
const queue = new Queue();
queue.push(123);
queue.push('Hello World');
console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));
