// Characteristics
// The worst case performance scenario for a linear search is that it needs to loop through the entire collection; either because the item is the last one, or because the item isn't found. In other words, if you have N items in your collection, the worst case scenario to find an item is N iterations. This is known as O(N) using the Big O Notation. The speed of search grows linearly with the number of items within your collection.
//
// Linear searches don't require the collection to be sorted.
//
// In some cases, you'll know ahead of time that some items will be disproportionally searched for. In such situations, frequently requested items can be kept at the start of the collection. This can result in exceptional performance, regardless of size, for these frequently requested items.





function findIndex(values, target) {
  for(var i = 0; i < values.length; ++i){
    if (values[i] == target) { return i; }
  }
  return -1;
}
findIndex([7, 3, 6, 1, 0], 6)
console.log(findIndex([7, 3, 6, 1, 0], 6)
);
