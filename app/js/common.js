$(function() {
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('.header-top').addClass('fixed');
		} else {
			$('.header-top').removeClass('fixed');
		}
  });

  new WOW().init();

  var t1 = new TimelineMax({paused: true});

      t1.to(".one", .50, {
          y: 6,
          rotation: 45,
          ease: Expo.easeInOut
      });
      t1.to(".two", .50, {
          y: -6,
          rotation: -45,
          ease: Expo.easeInOut,
          delay: -.25
      });

      t1.to(".menu", .25, {
          top: "0%",
          ease: Expo.easeInOut,
          delay: .25
      });

      t1.staggerFrom(".menu ul li", .90, {x: -200, opacity: 0, ease:Expo.easeOut}, .009);

      t1.reverse();
      $(document).on("click", ".toggle-btn", function() {
          t1.reversed(!t1.reversed());
      });
      $(document).on("click", ".mobile-nav", function() {
          t1.reversed(!t1.reversed());
      });

// ANCHOR
$('a[data-target^="anchor"]').bind("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
	 scrollTop: $(anchor.attr("href")).offset().top - 70
	}, 1000);
	e.preventDefault();
 });
 return false;
// END ANCHOR
});
