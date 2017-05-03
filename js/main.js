var DrawEye = function(eyeContainer, eyePupil, speed, interval){
  
  var mouseX = 0, mouseY = 0, xp = 0, yp = 0;
  var limitX = $(eyeContainer).width() - $(eyePupil).width(),
      limitY = $(eyeContainer).height() - $(eyePupil).height(),
      offset = $(eyeContainer).offset();

  $(window).mousemove(function(e){
    mouseX = Math.min(e.pageX - offset.left, limitX);
    mouseY = Math.min(e.pageY - offset.top, limitY);

    if (mouseX < 0) {
      mouseX = 0;
    }

    if (mouseY < 0) {
      mouseY = 0;
    }
  });

  var follower = $(eyePupil);
  var loop = setInterval(function(){
    xp += (mouseX - xp) / speed;
    yp += (mouseY - yp) / speed;
    follower.css({left:xp, top:yp});
  }, interval);
};

//create eyes
var eye1 = new DrawEye("#left-eye",  "#left-pupil", 8, 30);
var eye2 = new DrawEye("#right-eye", "#right-pupil", 8, 30);