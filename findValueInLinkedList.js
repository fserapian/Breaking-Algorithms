/************** FIND VALUE IN LINKED LIST ***************/
/*
    Given a linked list. return true if given target is found, otherwise return false.
 */

// The linked list
class Node {
    constructor(val) {
        this.val = val;
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

function linkedListFind(head, target) {
    let current = head;

    while (current !== null) {
        if (current.val === target) {
            return true;
        }
        current = current.next;
    }

    return false;
}

// Recursively
function linkedListFind1(head, target) {
    if (head === null) return false;
    if (head.val === target) return true;

    return linkedListFind1(head.next, target);
}

console.log(linkedListFind(a, 'D'));
console.log(linkedListFind1(a, 'D'));
