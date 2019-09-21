// Functions: 
// insert
// remove
// findMin
// getRootNode
// in-order(node)
// pre-order(node)
// post-order(node)
// level-order(node)
// search(node, data)

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Basic functions
    insert(val) {
        if (this.root === null) {
            this.root = new Node(val);
            return this;
        } else {
            let pointer = this.root;
            while (true) {
                if (val === pointer.val) return undefined;
                if (val > pointer.val) {
                    if (pointer.right) {
                        pointer = pointer.right;
                    } else {
                        pointer.right = new Node(val);
                        return this;
                    }
                } else {
                    if (pointer.left) {
                        pointer = pointer.left;
                    } else {
                        pointer.left = new Node(val);
                        return this;
                    }
                }
            }
        }
    }

    remove(val) {

    }

    findMin(node) {

    }

    getRootNode() {

    }

    inOrder(node) {

    }

    preOrder(node) {

    }

    postOrder(node) {

    }

    levelOrder(node) {

    }

    search(node, data) {

    }

    // Udemy example

    // find(value) {
    //     if (this.root === null) return false;
    //     var current = this.root;
    //     while (true) {
    //         if (current.value === value) return true;
    //         if (current.value > value) {
    //             if (current.left === null) return false;
    //             current = current.left;
    //         } else {
    //             if (current.right === null) return false;
    //             current = current.right;
    //         }
    //     }
    // }

    // find(value, node = this.root) {
    //     if (!node) return false;
    //     if (node.value === value) return true;
    //     if (node.value > value) {
    //         return this.find(value, node.left);
    //     } else {
    //         return this.find(value, node.right);
    //     }
    // }

}

let tree = new BinarySearchTree();
tree.insert(100);
tree.insert(90);
tree.insert(109);
tree.insert(101);
tree.insert(105);
tree.insert(10);
tree.insert(12);

console.log(tree);