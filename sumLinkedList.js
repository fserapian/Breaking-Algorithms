/************** SUM LINKED LIST ***************/
/*
    Given a linked list. return the sum of its values.
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(20);
const b = new Node(40);
const c = new Node(60);
const d = new Node(80);

a.next = b;
b.next = c;
c.next = d;

function sumLinkedList(head) {
    let current = head;
    let sum = 0;

    while (current !== null) {
        sum += current.val;
        current = current.next;
    }

    return sum;
}

// Recursive
function sumLinkedList1(head) {
    let current = head;

    if (current === null) {
        return 0;
    }

    return current.val + sumLinkedList1(current.next);
}

console.log(sumLinkedList(a));
console.log(sumLinkedList1(a));
