//Wow JS
new WOW().init();

//AOS JS
AOS.init();



// Slick Slider carousel
$(document).ready(function(){
  $('.carousel').slick({
    dots: true
  });

  $('.caption_slides').slick({
    dots: true
  });

});

$(window).load(function() {
  // Animate loader off screen
  $(".loader").delay (1500).fadeOut("slow");
});


$('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1
});

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 100);
ctx.lineTo(20, 100);
ctx.lineTo(280, -40);
ctx.strokeStyle = "black";
ctx.stroke();
