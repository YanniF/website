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
    if($(window).scrollTop() < $('body').height()) {

      xp += (mouseX - xp) / speed;
      yp += (mouseY - yp) / speed;
      follower.css({left:xp, top:yp});
      
      $('header').addClass('fixed');
      $('.balloon').addClass('balloon-animation');
      $('.balloon-wrap').addClass('balloon-wrap-animation');
    }
    else {//stop animation when balloon is not showing, is there a better way to do that?
      $('header').removeClass('fixed');
      $('.balloon').removeClass('balloon-animation');
      $('.balloon-wrap').removeClass('balloon-wrap-animation');
    }

    if($(window).scrollTop() > $('.cloud').offset().top - 70) {
      $('.navbar').addClass('added-color');
    }
    else {
      $('.navbar').removeClass('added-color');
    }

    if($(window).scrollTop() > $('#contact').offset().top - $(window).height()) {
      console.log('yay');
      $('.balloon2').addClass('balloon-animation');
      $('.balloon-wrap2').addClass('balloon-wrap-animation2');
    }
    else {
      console.log('nay');
      $('.balloon2').removeClass('balloon-animation');
      $('.balloon-wrap2').removeClass('balloon-wrap-animation2');
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
    }, 900);
  }
});