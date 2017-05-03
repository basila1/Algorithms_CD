// Characteristics
// Every iteration eliminates half of the remaining possibilities. This makes binary searches very efficient - even for large collections. Our implementation relies on recursion, though it is equally as common to see an iterative approach.
//
// Binary search requires a sorted collection. This means the collection must either be sorted before searching, or inserts/updates must be smart. Also, binary searching can only be applied to a collection that allows random access (indexing).
// 
// In The Real World
// Binary searching is frequently used thanks to its performance characteristics over large collections. The only time binary searching doesn't make sense is when the collection is being frequently updated (relative to searches), since re-sorting will be required.
//
// Hash tables can often provide better (though somewhat unreliable) performance. Typically, it's relatively clear when data belongs in a hash table (for frequent lookups) versus when a search is needed.


function findIndex(values, target) {
  return binarySearch(values, target, 0, values.length - 1);
};

function binarySearch(values, target, start, end) {
  if (start > end) { return -1; } //does not exist

  var middle = Math.floor((start + end) / 2);
  var value = values[middle];

  if (value > target) { return binarySearch(values, target, start, middle-1); }
  if (value < target) { return binarySearch(values, target, middle+1, end); }
  return middle; //found!
}
findIndex([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 20);
console.log(findIndex([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 20));
//finished
