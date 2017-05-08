var hHeader = $('header').height();

var DrawEye = function(eyeContainer, eyePupil, speed, interval) {
  
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

    //will stop the eyes if the avatar is out of sight
    if($(window).scrollTop() < hHeader) {

      xp += (mouseX - xp) / speed;
      yp += (mouseY - yp) / speed;
      follower.css({left:xp, top:yp});

      $('.balloon').addClass('balloon-animation');
      $('.balloon-wrap').addClass('balloon-wrap-animation');
    }
    else {//stop animation when balloon is not showing, is there a better way to do that?
      $('.balloon').removeClass('balloon-animation');
      $('.balloon-wrap').removeClass('balloon-wrap-animation');
    }

    if($(window).scrollTop() > $('.cloud').offset().top - 70) {
      $('.navbar').addClass('added-color');
    }
    else {
      $('.navbar').removeClass('added-color');
    }
  }, interval);
    
}; //DrawEye

//create eyes
var eye1 = new DrawEye("#left-eye",  "#left-pupil", 8, 30);
var eye2 = new DrawEye("#right-eye", "#right-pupil", 8, 30);

//animated scroll
$("#myNavbar a").on('click', function(event) {
  
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
  }
});