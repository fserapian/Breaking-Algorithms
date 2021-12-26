/************** GET VALUE BY INDEX IN LINKED LIST ***************/
/*
    Given a linked list. return value of node by a specific index.
 */

// The linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

function getValueByIndexInLinkedList(head, index) {
    let current = head;

    let count = 0;
    while (current !== null) {
        if (count === index) {
            return current.value;
        }
        count++;
        current = current.next;
    }

    return null;
}

// Recursively
function getValueByIndex(head, index) {
    if (head === null) return null;
    if (index === 0) return head.value;

    return getValueByIndex(head.next, index - 1);
}

console.log(getValueByIndexInLinkedList(a, 0));
console.log(getValueByIndexInLinkedList(a, 1));
console.log(getValueByIndexInLinkedList(a, 2));
console.log(getValueByIndexInLinkedList(a, 3));
console.log(getValueByIndexInLinkedList(a, 4));
console.log('-------------');
console.log(getValueByIndex(a, 0));
console.log(getValueByIndex(a, 1));
console.log(getValueByIndex(a, 2));
console.log(getValueByIndex(a, 3));
console.log(getValueByIndex(a, 4));

