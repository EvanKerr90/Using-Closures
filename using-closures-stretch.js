  var wrapLog = function (callback, name) {

  return function(...param) {
    let result = callback(...param);
    console.log(name + '(' + param + ')' + ' => ' + result);
  }
};

  var area = function (x, y) {
  return x * y;
};

 var logArea = wrapLog(area, "area");

 logArea(5, 3) //area(5, 3) => 15
 logArea(3, 2);  //area(3, 2) => 6


 var area = function (x, y) {
   return x * y;
};

 var volume = function (x, y, z) {
   return x * y * z;
 };
 var logVolume = wrapLog(volume, "volume");

 logVolume(5, 3, 2); // volume(5, 3, 2) => 30
 logVolume(3, 2, 4); // volume(3, 2, 4) => 24
