var hello = function() {
  var a = function() {
    return 3;
  };
  return a();
  var a = function() {
    return 4;
  };
};

console.log(hello());
