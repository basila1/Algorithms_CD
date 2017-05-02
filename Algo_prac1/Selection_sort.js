// There are many different ways to sort the cards. Here's a simple one, called selection sort, possibly similar to how you sorted the cards above:
// Find the smallest card. Swap it with the first card.
// Find the second-smallest card. Swap it with the second card.
// Find the third-smallest card. Swap it with the third card.
// Repeat finding the next-smallest card, and swapping it into the correct position until the array is sorted.
// This algorithm is called selection sort because it repeatedly selects the next-smallest element and swaps it into place.

var indexOfMinimum = function (array, startIndex) {
    var minValue = array[startIndex],
        minIndex = startIndex,
        i;

    for (i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
            minIndex = i;                                    // assign here the index
        }
    }
    return minIndex;
};

var array = [18, 6, 66, 44, 9, 22, 14],
    index = indexOfMinimum(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14],
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array,
//  "index" has value 4
println("The index of the minimum value of the subarray starting at index 2 is " + index + "."  );
Program.assertEqual(index, 4);
