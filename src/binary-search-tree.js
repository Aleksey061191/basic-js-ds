const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    if (this.tree == null) {
      this.tree = new Node(data);
    }
    let newTree = this.tree;
    while (newTree) {
      if (newTree.data == data) {
        return;
      }
      if (newTree.right == null && newTree.data < data) {
        newTree.right = new Node(data);
        return;
      } else {
        if (newTree.left == null && newTree.data > data) {
          newTree.left = new Node(data);
          return;
        }
      }
      if (newTree.data < data) {
        newTree = newTree.right;
      } else {
        newTree = newTree.left;
      }
    }
  }

  has(data) {
    if (!this.tree) {
      return false;
    } 
    let find = this.tree;
    while (find){
      if (find.data == data) {
        return true;
      } else {
        if (find.data > data){
          find = find.left;
        } else {
          find = find.right;
        }
      }
    }
    return false;
  }

  find(data) {
    let find = this.tree;
    while (find){
      if (find.data == data) {
        return find;
      } else {
        if (find.data > data){
          find = find.left;
        } else {
          find = find.right;
        }
      }
    }
    return null;
  }

  remove(data) {
    if (this.has(data)){
      let remove = this.find(data);
      if (this.tree.data == remove.data && remove.right){
        remove = remove.right.data;
      }
      if (this.tree.data == remove.data && !remove.right && remove.left){
        remove = remove.left.data;
      }
      if (this.tree == remove && !remove.right && !remove.left){
        remove = null;
      }
      if (this.tree.data > data && remove.left) {
        remove = remove.left.data;
      } else {
        if (this.tree.data > data && !remove.left && remove.right) {
          remove = remove.right.data;
        } else {
          remove = null;
        }
      }
      if (this.tree.data < data && remove.right) {
        remove = remove.right.data;
      } else {
        if (this.tree.data < data && !remove.right && remove.left) {
          remove = remove.left.data;
        } else {
          remove = null;
        }
      }
    }
    return;
  }

  min() {
    if (!this.tree){
      return null;
    }
    let min = this.tree;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.tree){
      return null;
    }
    let max = this.tree;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  } 

}