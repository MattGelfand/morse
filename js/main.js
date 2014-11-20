// Fit Text

/*$("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });*/


// Picture element HTML5 shiv
document.createElement( "picture" );


// smooth scrollage 

$('a').smoothScroll();


// sticky header 

$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
$('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});


// add overflow:hidden to body 

$('.addOverflow').click(function() {
  $('body').addClass('overflowToggle');
});

$('#close').click(function() {
  $('body').removeClass('overflowToggle');
});

$('#about-open').click(function() {
  $('body').addClass('overflowToggle');
});


