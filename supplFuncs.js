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
            //console.log('reached the end, I guess.');
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
        // tracking previously-visited item
        let previousNode = inputLinkedList.head;

        while ( (currNode !== null) && (currNode.next.next.next !== null) ) {
            // Save previous node
            previousNode = currNode;
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
            console.log('List is empty, cannot check for a cycle.');
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

        // initialize output list as totally new linkedList
        let outputList = new linkedList();

        if (inputLinkedList.head === null) {
            console.log('List is empty, cannot add new item before anything.')
        }
        
        // start outputList with first element in un-sorted input list
        outputList.insertLast(inputLinkedList.head.value);

        // Otherwise, start ticking through input list items, starting with second item
        let currNode = inputLinkedList.head.next;
        //let previousNode = inputLinkedList.head;

        while ( (currNode) ) {

            // pull out the value of the current item in input list
            const currValue = currNode.value;
            console.log(`Value of input list currently trying to find a home for is ${currValue}`);

            // now need to iterate through items in output list
            let currTargetNode = outputList.head;
            console.log(`currTargetNode is ${currTargetNode.value}`)

            while ( (currTargetNode !== null) && (currTargetNode.value < currValue) ) {
                console.log(`In while loop now - currTargetNode is ${currTargetNode.value}`);
                currTargetNode = currTargetNode.next
            }
            if (currTargetNode.value >= currValue) {
                outputList.insertBefore(currTargetNode.value, currValue)
                //outputList.insertLast(currValue);
                break;
            }

            // Advance to next node in input list
            currNode = currNode.next;
        }

        return outputList;

    }

}

module.exports = supplFuncs;