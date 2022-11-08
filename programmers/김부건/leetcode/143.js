// 143. Reorder List
var reorderList = function (head) {
  let deque = [],
    node = head;

  while (node) {
    deque.push(node);
    node = node.next;
  }

  let size = deque.length;
  node = head;
  for (let i = 0; i < size; i++) {
    node.next = i % 2 === 0 ? deque.shift() : deque.pop();
    node = node.next;
  }
  node.next = null;
};
