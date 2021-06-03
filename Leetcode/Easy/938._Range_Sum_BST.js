/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    let sum = 0;
    let total = 0;
    let totalLeft = 0;
    let totalRight = 0;
    if(root === null) return sum;
    if(root.val >= low && root.val <= high){
        sum = sum + root.val;
    }
    totalLeft = rangeSumBST(root.left, low, high);
    totalRight = rangeSumBST(root.right, low, high);
    total = totalLeft+ totalRight + sum;
    return total;
};