type Optional<T> = T | null | undefined;

interface Node<T> {
    item: T;
    next?: Optional<Node<T>>;
}
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Optional<Node<T>>;
    private tail?: Optional<Node<T>>;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    prepend(item: T): void {
        const node: Node<T> = { item, next: null };
        if (this.length === 0) {
            this.tail = node;
        }
        node.next = this.head;
        this.head = node;
        this.length += 1;
    }
    insertAt(item: T, idx: number): void {
        if (this.isOutOfBounds(idx)) {
            return;
        }

        const node: Node<T> = { item, next: null };
        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length - 1) {
            this.append(item);
            return;
        }

        let j = 0;
        let prev = this.head;
        let curr = this.head;
        while (j < idx) {
            j += 1;
            prev = curr;
            curr = curr?.next;
        }
        node.next = curr;
        if (prev) {
            prev.next = node;
        }
        this.length += 1;
    }
    append(item: T): void {
        const node: Node<T> = { item, next: null };
        if (this.length === 0) {
            this.head = node;
        } else if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
        this.length += 1;
    }
    remove(item: T): T | undefined {
        let prev = this.head;
        let curr = this.head;
        while (curr) {
            if (curr.item === item) {
                if (curr === this.head) {
                    this.head = curr.next;
                } else if (prev) {
                    prev.next = curr.next;
                }
                curr.next = null;
                this.length -= 1;
                return item;
            }
            prev = curr;
            curr = curr.next;
        }
        return;
    }
    get(idx: number): T | undefined {
        if (this.isOutOfBounds(idx)) {
            return;
        }

        let curr = this.head;
        for (let j = 0; j < idx; j += 1) {
            curr = curr?.next;
        }
        return curr?.item;
    }
    removeAt(idx: number): T | undefined {
        if (this.isOutOfBounds(idx)) {
            return;
        }

        this.length -= 1;

        if (idx === 0) {
            const node = this.head as Node<T>;
            this.head = node.next;
            node.next = null;
            return node.item;
        }

        let prev = this.head;
        let curr = this.head;
        for (let j = 0; j < idx; j += 1) {
            prev = curr;
            curr = curr?.next;
        }
        if (prev) {
            prev.next = curr?.next;
        }
        if (curr) {
            curr.next = null;
        }
        return curr?.item;
    }

    private isOutOfBounds(idx: number): boolean {
        return idx < 0 || idx > this.length - 1;
    }
}
