class Q {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  get() {
    return this.head;
  }

  append(val) {
    let newNode = new QNode(val);
    if(this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }

  remove() {
    if(this.head) {
      this.head = this.head.next;
      if(!this.head) {
        this.tail = null;
      }
    }
  }
};

class QNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

exports = module.exports = Q;
