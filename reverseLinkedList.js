/************** REVERSE LINKED LIST ***************/
/*
    Write a function, reverseLinkedList, that takes in the head of a linked list
    as an argument. The function should reverse the order of the nodes in the linked list
    in-place and return the new head of the reversed linked list.
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

function reverseLinkedList(head) {
    let current = head;
    let prev = null;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

function reverseList(head, prev = null) {
    if (head === null) {
        return prev;
    }

    let next = head.next;
    head.next = prev;
    return reverseList(next, head);
}

console.log(reverseList(a));
