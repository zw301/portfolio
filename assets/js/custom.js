(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});


		window.onscroll = function() {
    if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 100) {
        document.getElementById("backToTop").style.display = "block";
        document.getElementById("navbar").classList.add("navbar-light");
        document.getElementById("navbar").classList.remove("navbar-custom");

      } else {
       document.getElementById("backToTop").style.display = "none";
			 document.getElementById("navbar").classList.remove("navbar-light");
			 document.getElementById("navbar").classList.add("navbar-custom");
      }
    }
	});


	document.getElementById("backToTop").onclick = function() {
		document.getElementById("h").scrollIntoView({
				"behavior" : "smooth",
				"block": "start",
				"inline": "start"
			});
	}

	document.getElementById("burger").onclick = function() {
		document.getElementById("overlaynav").style.display = "block";
		document.getElementById("navbar").style.display = "none";
		document.getElementById("backToTop").style.display = "none";
	}
	document.getElementById("overlayclose").onclick = function(){
		document.getElementById("overlaynav").style.display = "none";
		document.getElementById("navbar").style.display = "block";
	};

	document.getElementById("overlaynav").onclick = function() {
		document.getElementById("overlaynav").style.display = "none";
		document.getElementById("navbar").style.display = "block";
	}

})(jQuery);
