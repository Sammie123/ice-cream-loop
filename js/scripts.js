$(document).ready(function() {

  var flavors = ["Chocolate", "Strawberry", "Coconut", "Blueberry"];

  flavors.forEach(function(flavor) {
    $("#flavor" + (flavors.indexOf(flavor)+1) ).text(flavor);
  });
});
