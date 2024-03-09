import {randomUUID} from 'easy-uuid'

class MessageQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(message) {
    let id = randomUUID(32)
    
    this.queue.push({
      id,
      message:message
    });
    return id
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}


export {
  MessageQueue
}
