$(document).ready(function() {
  //animate eyes 
  var currentMousePos = { x: -1, y: -1 };

  $(document).mousemove(function(event) {
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;

    var width = $(window).width();
    var height = $(window).height();

    var leftPositionLeftEye = currentMousePos.x / (width * 3) * 20;
    var leftPositionRightEye = leftPositionLeftEye + 45;//distance between eyes
    var topPositionLeftEye = currentMousePos.y / height * 10;
    var topPositionRightEye = topPositionLeftEye;

    $(".left-eye").css("left", leftPositionLeftEye).css("top", topPositionLeftEye);
    $(".right-eye").css("left", leftPositionRightEye).css("top", topPositionRightEye);
  });
});

var offsets = eye.lens.getBoundingClientRect();
    var left = (offsets.left - x)
    var top = (offsets.top - y)
    var rad = Math.atan2(top, left);
    element.style.webkitTransform = "rotate(" + rad + "rad)"; 