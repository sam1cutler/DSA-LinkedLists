const _Node = require('./node');

class linkedList {

    constructor() {
        // linked list has head = beginning of the list;
        // upon creation, linked list is empty, therefore, head is null
        this.head = null;
    }

    // insert @ beginning of list
    insertFirst(item) {
        // 1) Create a new node item, whose "next" points to the old head item
        //    (formerly the first item in the linked list, now the second item)
        // 2) point the head to that new node
        this.head = new _Node(item, this.head)
    }

    // insert @ end of list
    insertLast(item) {
        // Check if the list is empty - in which case, simply insert first
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            // Need to find the end of the list! -->
            // identify a temporary node - the node of the "current" position in linked list
            let tempNode = this.head;
            // as long as the "curent" node's next is not null,
            while (tempNode.next !== null) {
                // advance to the next node
                tempNode = tempNode.next;
            }

            // As soon as the temp node's next IS null - you're at the end of the linked list.
            // Here, have the next of the "current" node (former last in the list) point to 
            // a newly-created node item, whose "next" points to null (it is the last item in the list)
            tempNode.next = new _Node(item, null);
        }   
    }

    // insert before...
    insertBefore(targetItem, newItem) {
        // Check if list is empty
        if (this.head === null) {
            console.log('List is empty, cannot add new item before anything.')
        } 

        // Check if target item is the list's head
        if (this.head.value === targetItem) {
            this.head = new _Node(newItem, this.head);
            return;
        }

        // Otherwise, start ticking through list items
        let currNode = this.head;
        // tracking previously-visited item
        let previousNode = this.head;

        while ( (currNode !== null) && (currNode.value !== targetItem) ) {
            // Save previous node
            previousNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        // If the currently-considered node's value is the desired item,
        if (currNode.value === targetItem) {
            // a) create new Node item,
            // b) have the previousNode's `next` point to this new item,
            // c) have the new Node's `next` point to the current node
            previousNode.next = new _Node(newItem, currNode);
            return;
        }
    }

    // insert after...
    insertAfter(targetItem, newItem) {
        if (this.head === null) {
            console.log('List is empty, cannot add new item before anything.')
        } 

        // Otherwise, start ticking through list items
        let currNode = this.head;
        // tracking previously-visited item
        let previousNode = this.head;

        while ( (currNode !== null) && (previousNode.value !== targetItem) ) {
            // Save previous node
            previousNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        // If the previously-considered node's value is the desired item,
        if (previousNode.value === targetItem) {
            // a) create new Node item,
            // b) have the previousNode's `next` point to this new item,
            // c) have the new Node's `next` point to the current node
            previousNode.next = new _Node(newItem, currNode);
        }
    }

    insertAt(newItem, targetPosition) {

        let currentPosition = 0;

        // Start ticking through list items
        let currNode = this.head;
        // tracking previously-visited item
        let previousNode = this.head;

        while ( (currNode !== null) && (currentPosition < targetPosition) ) {
            // Save previous node
            previousNode = currNode;
            currNode = currNode.next;
            currentPosition++
        }

        if (currNode === null) {
            console.log('Requested position does not exist (list is too short)');
            return;
        }

        // If the currently-considered node's value is the desired item,
        if (currentPosition === targetPosition) {
            // a) create new Node item,
            // b) have the previousNode's `next` point to this new item,
            // c) have the new Node's `next` point to the current node
            previousNode.next = new _Node(newItem, currNode);
        }

    }

    find(item) {
        // start at head of linked list
        let currNode = this.head;

        // if the list is empty, nothing to provide
        if (!this.head) {
            return null;
        }

        // walk through items in the list, checked for desired item
        while (currNode.value !== item) {
            // if reach end of the list without finding item, return null
            if (currNode.next === null) {
                return null;
            }
            else {
                // if neither reach end nor find desired item, advance to next item
                currNode = currNode.next;
            }
        }

        // if above conditions not met, = found the item!
        return currNode;
    }

    remove(item) {
        if (!this.head) {
            return null;
        }

        // if item to be deleted is the first item (head), change head to be the second item
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        // Otherwise, start ticking through list items
        let currNode = this.head;
        // tracking previously-visited item
        let previousNode = this.head;

        while ( (currNode !== null) && (currNode.value !== item) ) {
            // Save previous node
            previousNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

}

module.exports = linkedList;

/*
const testLinkedList = new linkedList();
console.log(testLinkedList);

testLinkedList.insertFirst('splat');
console.log(testLinkedList);

testLinkedList.insertLast('grr');
console.log(testLinkedList);

testLinkedList.insertLast('snow');
console.log(testLinkedList);

testLinkedList.insertFirst('rain');
console.log(testLinkedList);

testLinkedList.insertFirst('invisible');
console.log(testLinkedList);
*/