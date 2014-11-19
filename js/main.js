/*$("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });*/


 
// Picture element HTML5 shiv
document.createElement( "picture" );


/* Smooth Scrollage */

$('a').smoothScroll();



/*Owl Slider*
$(document).ready(function() {
 
  $("#work-slider-inner").owlCarousel({
      items : 3,
      lazyLoad : true,
      rewindNav: true,
      pagination: true,
      navigation: true,
      navigationText: ['◀','▶']
 
  });
 
});


/* Sticky Header */

$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
$('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});


$('.addOverflow').click(function() {
  $('body').addClass('overflowToggle');
});

$('#close').click(function() {
  $('body').removeClass('overflowToggle');
});

$('#about-open').click(function() {
  $('body').addClass('overflowToggle');
});


