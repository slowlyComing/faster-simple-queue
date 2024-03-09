import {MessageQueue} from "./src/queue.js";

// export
export { MessageQueue};

let msg = new MessageQueue()

console.log(msg.enqueue('qqq'))