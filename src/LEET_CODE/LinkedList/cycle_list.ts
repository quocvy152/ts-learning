class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function isSpecialCycleList(head: ListNode | null): boolean {
    let currentNode = head?.next;

    while(currentNode !== null) {
        currentNode = currentNode?.next;
    }

    return true;
}

function hasCycle(head: ListNode | null): boolean {
    if (!head?.next)
        return false;

    let listNodeRepeated: { val: number, next: number }[] = [];
    let currentNode = head;

    while (currentNode !== null) {
        if (currentNode.next === null)
            return false;

        const isNodeRepeated = listNodeRepeated.filter(node => node.val === currentNode.next?.val && node.next === currentNode.next?.next?.val).length;
        if (isNodeRepeated) {
            return true;
        }

        listNodeRepeated.push({
            val: currentNode.val,
            next: currentNode.next.val
        });
        currentNode = currentNode.next;
    }

    return isSpecialCycleList(head);
};
