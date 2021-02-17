const linkedList = require('./linkedList');

const supplFuncs = {

    display(inputLinkedList) {

        let arrayOfList = [];

        let currentNode = inputLinkedList.head;

        while ( currentNode.next !== null ) {
            arrayOfList.push(currentNode.value);
            currentNode = currentNode.next;
        }

        if ( currentNode.next === null ) {
            arrayOfList.push(currentNode.value);
        }
        return arrayOfList;
    },

    size(inputLinkedList) {

        let ticker = 0;

        let currentNode = inputLinkedList.head;

        while ( currentNode.next !== null ) {
            ticker++;
            currentNode = currentNode.next;
        }

        if ( currentNode.next === null ) {
            ticker++;
        }
        
        return `This linked list contains ${ticker} elements.`;
    },

    isEmpty(inputLinkedList) {

        let answer = 'This list is empty.';

        if (inputLinkedList.head) {
            answer = 'This list has one or more elements.'
        }

        return answer;

    },

    findLast(inputLinkedList) {

        let currentNode = inputLinkedList.head;

        while ( currentNode.next !== null ) {
            currentNode = currentNode.next;
        }

        if ( currentNode.next === null ) {
            return currentNode;
        }
    },

    reverse(inputLinkedList) {

        console.log(`current is`);
        console.log(inputLinkedList.head);
        

        // Base case: single node, specified as `head`, with `next` of null
        if (inputLinkedList.head.next === null) {
            // simply return this single node: it's the whole list for now.
            return inputLinkedList;
        } else {
            // start by defining the "rest" as the linked list pointed to as "next" by the input list's head
            const rest = inputLinkedList.head.next;
            
            // lock in a definition of the "current" node as the input list's head
            const current = inputLinkedList.head;

            console.log(`rest is`);
            console.log(rest);

            // change the input list's head property to point to (?) the formerly 2nd, now 1st item in the linked list
            inputLinkedList.head = inputLinkedList.head.next;
            
            // current points to a node, that was the head of the input list;
            // change that node's `next` property to be null 
            // (b/c, until changed, this is scheduled to be the *last* item in the reversed list)
            current.next = null;

            console.log("about to recur");

            // the input list has no effectively had its head cut off:
            // the former head is now a free-floating node point to null,
            // and the input list itself has a new head pointing to its former 2nd element;
            // therefore, it's now a new linked list with a new head: reverse that list
            const reversedList = this.reverse(inputLinkedList);

            // above, specified "rest" to be the node that was the input list's head.next;
            // this node still exists (?) in the reversed list returned by recursive call above;
            // now, need to change its `next` property to be the "current" node
            rest.next = current;

            // Return this reversed list, which has
            //    a penultimate element whose "next" points to the "current" node,
            //    a final element that is this "current" node, whose `next` we've specified to be null,
            return reversedList;
        }

    },

    findThird(inputLinkedList) {

        
        if (!inputLinkedList.head.next.next) {
            console.log('List is too short, cannot find third from the end.')
        } 

        // Otherwise, start ticking through list items
        let currNode = inputLinkedList.head;

        while ( (currNode !== null) && (currNode.next.next.next !== null) ) {
            // Advance current node
            currNode = currNode.next;
        }

        if (currNode.next.next.next === null) {
            return currNode;
        }

    },

    middle(inputLinkedList) {

        if (inputLinkedList.head === null) {
            console.log('List is empty, cannot find midpoint.')
        }

        let currNodeLeading = inputLinkedList.head;
        let currNodeLagging = inputLinkedList.head;

        while (currNodeLeading.next !== null && currNodeLeading.next.next !== null) {
            currNodeLeading = currNodeLeading.next.next;
            currNodeLagging = currNodeLagging.next;
        }

        if (currNodeLeading.next === null || currNodeLeading.next.next === null) {
            return `The midpoint of the list is '${currNodeLagging.value}'.`;
        }

    },

    cycleCheck(inputLinkedList) {

        if (inputLinkedList.head === null) {
            return 'List is empty, cannot check for a cycle.';
        }

        let currNode = inputLinkedList.head;

        while (currNode.next !== null) {
            if (currNode.visited === true) {
                return 'This list is cyclic.'
            }
            currNode.visited = true;
            currNode = currNode.next;
        }

        if (currNode.next === null) {
            return 'This list is not cyclic.'
        }

    },

    sortList(inputLinkedList) {

        if (inputLinkedList.head === null) {
            return 'List has no elements and so cannot be sorted.';
        } else if (inputLinkedList.head.next === null) {
            return 'List has a single element and so cannot be sorted.';
        }

        // initialize new linkedList to populate
        let output = new linkedList();

        // identify the first node in the input list
        let currInpNode = inputLinkedList.head;

        // make the first node from input list the head of the output list (for now)
        output.insertFirst(currInpNode.value);

        // tick up currInpNode to second element in input list
        currInpNode = currInpNode.next;

        // want to cycle through all elements in input list
        while (currInpNode) {
            const newValueToAdd = currInpNode.value;

            // check newValueToAdd against all elements in current output list
            let currOutNode = output.head;
            while (currOutNode) {
                // if the new value to add is less than the "currently" considered output list value,
                if (currOutNode.value > newValueToAdd) {
                    // insert that "new value" *before* currently-considered output value
                    output.insertBefore(currOutNode.value, newValueToAdd);
                    // have successfully integrated this input value, 
                    // so can stop comparing to output list elements and advance to next input list value
                    break;
                } else if (currOutNode.value < newValueToAdd && currOutNode.next) {
                    // if new value is greater than the "current" output list value,
                    // advance to the next output list value
                    currOutNode = currOutNode.next;
                } else if (currOutNode.next === null) {
                    // if there is no next output list - we've reached the end,
                    // and the new value is greater than any values in current output list.
                    // So, can insert new value at the end, 
                    output.insertLast(newValueToAdd);
                    // and break out to advance to next input value.
                    break;
                }
            }

            // as long as there is a next input value to consider,
            if (currInpNode.next) {
                // advance along
                currInpNode = currInpNode.next
            } else if (currInpNode.next === null) {
                // but if there isn't, and we've considered every input value,
                // ready to return the (hopefully sorted) output list
                return output;
            }   
        }
    }
}

module.exports = supplFuncs;