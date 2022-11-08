// 641. Design Circular Deque
var MyCircularDeque = function (k) {
  this.maxSize = k;
  this.deque = [];
};

MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;

  this.deque = [value, ...this.deque];

  return true;
};

MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;

  this.deque = [...this.deque, value];

  return true;
};

MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;

  this.deque = this.deque.slice(1);

  return true;
};

MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;

  this.deque = this.deque.slice(0, this.deque.length - 1);

  return true;
};

MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1;

  return this.deque[0];
};

MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;

  return this.deque[this.deque.length - 1];
};

MyCircularDeque.prototype.isEmpty = function () {
  return this.deque.length === 0;
};

MyCircularDeque.prototype.isFull = function () {
  return this.deque.length === this.maxSize;
};
