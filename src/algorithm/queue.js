class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        this.queue.push(data);
    }

    dequeue() {
        const firstItem = this.queue.shift();
        return firstItem;
    }

    printQueue() {
        for(let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i]);
        }
    }
}

const LIST = new Queue();

LIST.enqueue(1);
LIST.enqueue(19);
LIST.enqueue(-22);
LIST.enqueue(32);
LIST.enqueue(102);
LIST.enqueue(-2);

LIST.printQueue();

LIST.dequeue();
LIST.dequeue();

LIST.printQueue();