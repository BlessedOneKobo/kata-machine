type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Stack<T> {
    #length: number;
    private head?: Node<T>;

    constructor() {
        this.#length = 0;
        this.head = undefined;
    }

    get length() {
        return this.#length;
    }

    set length(_) {
        return;
    }

    push(item: T): void {
        const node: Node<T> = { value: item, next: this.head };
        this.head = node;
        this.#length += 1;
    }

    pop(): T | undefined {
        const node = this.head;
        if (node) {
            this.head = node.next;
            node.next = undefined;
            this.#length -= 1;
        }
        return node?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
