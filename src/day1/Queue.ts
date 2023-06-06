type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        const node: Node<T> = { value: item };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }

        this.length += 1;
    }

    deque(): T | undefined {
        if (this.tail === this.head) {
            this.tail = undefined;
        }

        const node = this.head;
        if (node) {
            this.head = node.next;
            node.next = undefined;
            this.length -= 1;
        }
        return node?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
