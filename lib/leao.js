'use strict';

const createElement = (node) => {
  if(typeof node === 'string') {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.type);
  node.children
    .map(createElement)
    .forEach(element.appendChild.bind(element));
    return element;
}

const changed = (node1, node2) => {
  return typeof node1 !== typeof node2 || typeof node1 === 'string' && node1 !== node2 || node1.type !== node2.type
}

const leao = () => {
  return {
      h(type, props, ...children) {
        return {type, props, children};
      },
      updateElement(parent, newNode, oldNode, index = 0){
        if(!oldNode) {
          parent.appendChild(createElement(newNode));
        } else if(!newNode) {
          parent.removeChild(parent.childNodes[index]);
        } else if(this.changed(newNode, oldNode)) {
          parent.replaceChild(createElement(newNode), parent.childNodes[index]);
        } else if(newNode.type) {
          const newLength = newNode.children.length;
          const oldLength = oldNode.children.length;
          for(let i = 0; i< newLength || i < oldLength; i++) {
            this.updateElement(parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
          }
        }
      },
      changed(node1, node2){
        return typeof node1 !== typeof node2 || typeof node1 === 'string' && node1 !== node2 || node1.type !== node2.type
      }
  }
}

module.exports =  leao;
