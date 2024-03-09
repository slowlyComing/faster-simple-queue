import {MessageQueue} from "./src/queue.js";



// 示例用法
const queue = new MessageQueue();
queue.enqueue("Message 1");
queue.enqueue("Message 2");
queue.enqueue("Message 3");

console.log("Queue size:", queue.size()); 
console.log("Dequeue:", queue.dequeue()); 
console.log("Dequeue:", queue.dequeue()); 

console.log("Peek:", queue.peek()); 
console.log("Queue size:", queue.size());