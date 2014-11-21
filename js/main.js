// Fit Text

/*$("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });*/


// Picture element HTML5 shiv
document.createElement( "picture" );




/*$('a').smoothScroll();*/





// sticky header 

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});







