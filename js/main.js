/*$("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });*/




/* Smooth Scrollage */

$('a').smoothScroll();



/* Owl Slider */
$(document).ready(function() {
 
  $("#work-slider-inner").owlCarousel({
      items : 3,
      lazyLoad : true,
      pagination : true
 
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

