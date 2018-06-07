// EXERCISE 1:

  function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var pos = -1;

    return function() {
      if (pos === 9) {
        pos = 0;
      } else {
      pos += 1;
      }
      return list[pos];
    }
  };

  var rollLoadedDie = makeLoadedDie();

  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());

// EXERCISE 2:

var countdownGenerator = function (x) {

  return function() {
    if (x === 0) {
      console.log("Blast Off!")
      x -= 1;
    } else if (x < 0) {
      console.log("Rockets already gone, bub!")
    } else {
    console.log("T-minus " + x + "...");
    x -= 1;
    }
  }
};

var countdown = countdownGenerator(4);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!