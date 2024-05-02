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

  findNode(data) {
    let current = this.first;
    let nodeBeforeCurrent = null;

    while(current !== null) {
      if(current.data === data) {
        return {
          current,
          nodeBeforeCurrent
        };
      }

      nodeBeforeCurrent = current;
      current = current.next;
    }
  }

  intertAtBegining(data) {
    const newNode = new Node(data);
    newNode.next = this.first;
    this.first = newNode;
  }

  insertAtLatest(data) {
    const newNode = new Node(data);

    let current = this.first;

    while(current !== null) {
      let tempCurrent = current;
      current = current.next;

      if(current === null) {
        tempCurrent.next = newNode;
      }
    }
  }

  insertAtAnyWhereInList(dataInsert, dataFind) {
    let newNode = new Node(dataInsert);
    let resultFindNode = this.findNode(dataFind);
    let { current: nodeNeedInsert } = resultFindNode;

    if(nodeNeedInsert) {
      let nodeTemp = nodeNeedInsert.next; // giữ giá trị của node next của node cần insert dữ liệu vào sau

      nodeNeedInsert.next = newNode;
      newNode.next = nodeTemp;
    }
  }

  removeFirstNode() {
    let currentFirst = this.first;
    this.first = currentFirst.next;
  }

  removeLatestNode() {
    let current = this.first;

    while(current !== null) {
      let nodeBeforeLatestNode = current;
      current = current.next;

      if(current.next === null) {
        nodeBeforeLatestNode.next = null;
        break;
      }
    }
  }

  removeNodeByCondition(data) {
    let current = this.first;

    let resultFindNode = this.findNode(data);
    let { current: nodeNeedRemove, nodeBeforeCurrent } = resultFindNode;

    nodeBeforeCurrent.next = nodeNeedRemove.next;
    nodeNeedRemove.next = null;
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
linkedList.showLinkedList(); // log

linkedList.insertAtLatest(11);
linkedList.insertAtLatest(0);
linkedList.showLinkedList(); // log

linkedList.insertAtAnyWhereInList(100, 1);
linkedList.showLinkedList(); // log

linkedList.removeFirstNode();
linkedList.showLinkedList(); // log

linkedList.removeLatestNode();
linkedList.showLinkedList(); // log

linkedList.removeNodeByCondition(6);
linkedList.showLinkedList(); // log