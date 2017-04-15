//Create a function that accepts an array, and prints "yummy" each time one
//of the alues is equal to "food". If no array elements are "food", then print
//"I'm hungry" once.

function AlwaysHungry(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
    }
    else {
      console.log("I'm hungry");
    }
  }
}

AlwaysHungry(["food","food","food","food","food","food","food"])
AlwaysHungry(["not food","not food","not food","not food","not food"])
