const linkedList = require('./linkedList');
const supplFuncs = require('./supplFuncs');

// This document comprises tests of / experimentation with other functions and list methods.

const main = function() {
    const SLL = new linkedList();
    
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    SLL.insertBefore('Starbuck','Galaga');
    SLL.insertAfter('Helo', 'Spock');
    SLL.insertAt('bike', 2);

    return SLL;
}

const testOutput = main();
//console.log(testOutput.head.next.next.next.next.next.next.next.next);

const array = supplFuncs.display(testOutput);
//console.log(array);

/*
const testNode = new _Node('dummy');

testOutput.next = testNode;

const array2 = supplFuncs.display(testOutput);
console.log(array2);
*/

/*
const length = supplFuncs.size(testOutput);
console.log(length);

const status1 = supplFuncs.isEmpty(testOutput);
console.log(status1);

const testOutput2 = new linkedList();
const status2 = supplFuncs.isEmpty(testOutput2);
console.log(status2);

const lastOne = supplFuncs.findLast(testOutput);
console.log(lastOne);
*/

//const reversed = supplFuncs.reverse(testOutput.head);
//console.log(reversed);

//const third = findThird(testOutput);
//console.log(third);



const unordered = new linkedList();
unordered.insertFirst(3);
unordered.insertLast(2);
unordered.insertLast(5);
unordered.insertLast(7);
unordered.insertLast(1);
unordered.insertLast(99);
unordered.insertLast(11);
unordered.insertLast(8);
//console.log(unordered);
console.log(supplFuncs.display(unordered));

/*
unordered.insertBefore(1, 99);
console.log(unordered);
console.log(supplFuncs.display(unordered));
*/

const madeOrdered = supplFuncs.sortList(unordered);
//console.log(madeOrdered);
console.log(supplFuncs.display(madeOrdered));


//console.log('~~~~~~STARTING HERE~~~~~~~~~')

/*
const reversedOutput = supplFuncs.reverse(testOutput);
console.log(supplFuncs.display(reversedOutput));

*/

//const reversedNumList = supplFuncs.reverse(unordered);
//console.log(supplFuncs.display(reversedNumList));

//unordered.insertLast('91');
//unordered.insertLast('101');
//console.log(supplFuncs.middle(unordered));


/*
const cyclicList = new linkedList();
cyclicList.insertFirst('A');
cyclicList.insertLast('B');
cyclicList.insertLast('C');
cyclicList.insertLast('D');
//console.log(supplFuncs.display(cyclicList));
//console.log(cyclicList);

//console.log(cyclicList.head.next.next.next)
cyclicList.head.next.next.next.next = cyclicList.head.next;
//console.log(cyclicList.head.next.next.next)
//console.log(supplFuncs.display(cyclicList));

console.log(supplFuncs.cycleCheck(cyclicList));
*/