class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
  }

  intertAtBegining(data) {
    const newNode = new Node(data);
    newNode.next = this.first;
    this.first = newNode;
  }

  showLinkedList() {
    let result = '';
    let current = this.first;

    while(current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }

    result += 'null';
    console.log('My linked list: ' + result);
  }
}

const linkedList = new LinkedList();

linkedList.intertAtBegining(3);
linkedList.intertAtBegining(6);
linkedList.intertAtBegining(1);
linkedList.intertAtBegining(9);

linkedList.showLinkedList();