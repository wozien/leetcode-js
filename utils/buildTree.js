/**
 * 从数组构建一颗二叉树
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function buildTree(data) {
    function buildNode(i) {
        return data[i - 1] != null ? new TreeNode(data[i-1], buildNode(2*i), buildNode(2*i+1)) : null
    }
    let j = Math.floor(Math.sqrt(data.length))
    let root
    for(let i = 1; i <= j; i++) {
        const node = buildNode(i)
        if(!root) root = node
    }

    return root
}

const root = buildTree([0,0,0,0,null,null,0,null,null,null,0])
console.log(root)