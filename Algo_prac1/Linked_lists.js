function LinkedList() {
 this.head = null;
 this.tail = null;

 this.add = function(value) {
   var node = new Node(value);
   if (this.head == null) { this.head = node; }
   if (this.tail != null) { this.tail.next = node; }
   this.tail = node;
 };
}

function Node(value) {
 this.value = value;
 this.next = null;
}

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

var list2 = new LinkedList();
list2.add(6);
list2.add(5);
list2.add(4);
list2.add(3);
list2.add(2);


console.log(list);
console.log(list2);
