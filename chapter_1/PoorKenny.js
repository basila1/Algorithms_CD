//Kenny tries to stay safe, but somehow everyday somethign happens. If there is
//a 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake, 25%
// chance of blizzard, and 30% chance of meteor strike, write function
//whatHappensToday() to print the outcome.

function whatHappensToday() {
  var result = Math.floor(Math.random() * 100);
  console.log(result);

  if (result <= 10) {
    console.log("Volcano");
  }
  else if (result <= 25) {
    console.log("Tsunami");
  }
  else if (result <= 45) {
    console.log("earthquake");
  }
  else if (result <= 70) {
    console.log("blizzard");
  }
  else {
    console.log("meteor strike");
  }

}

whatHappensToday()
