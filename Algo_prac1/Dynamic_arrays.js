function ArrayList(initialLength) {
  this.length = 0;
  this.array = new Array(initialLength);

  this.add = function(value) {
    if (this.length == this.array.length){
      this.grow();
    }
    this.array[this.length++] = value;
  };
  this.grow = function() {
    var original = this.array;
    this.array = new Array(this.length * 2);
    for(var i = 0; i < this.length; ++i) {
      this.array[i] = original[i];
    };
  }
}
var array = new ArrayList(1);
array.add(2);
array.add(9);
array.add(4);
console.log(array);
