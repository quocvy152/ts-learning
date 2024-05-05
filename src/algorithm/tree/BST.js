class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const maxValue = (node) => {
    if(node === null) {
        return Number.MIN_VALUE;
    }

    let nodeData = node.data;
    let leftMax = maxValue(node.left);
    let rightMax = maxValue(node.right);

    let maxVal = Math.max(nodeData, leftMax, rightMax);
    return maxVal;
}

const minValue = (node) => {
    if(node === null) {
        return Number.MAX_VALUE;
    }

    let nodeData = node.data;
    let leftMin = minValue(node.left);
    let rightMin = minValue(node.right);

    let minVal = Math.min(nodeData, leftMin, rightMin);
    return minVal;
}

const isBST = (root) => {
    if(root === null) return 1;

    const maxLeft = maxValue(root.left);
    const minRight = minValue(root.right);

    if(root.left !== null && maxLeft > root.data) {
        return 0;
    }

    if(root.right !== null && minRight < root.data) {
        return 0;
    }

    if(!isBST(root.left) || !isBST(root.right)) {
        return 0;
    }

    return 1;
}

const nodeRoot = new Node(10);

nodeRoot.left = new Node(5);
nodeRoot.left.left = new Node(3);
nodeRoot.left.right = new Node(8);

nodeRoot.right = new Node(18);
nodeRoot.right.right = new Node(25);
nodeRoot.right.left = new Node(15);

console.log({
    isBST: isBST(nodeRoot)
});