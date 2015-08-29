$(document).ready(function() {

	 $(".popup").magnificPopup({type:'image'});

	$(".top_text h1, .section_header .me, .section_header .s_desc, .animate_left, .animate_right").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".animate_center").animated("flipInY", "flipInY");
	function heightDetect() {
		$(".main-head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
});

	$(".toggle_menu").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".top_menu").fadeOut(600);
		} else {
			$(".top_menu").fadeIn(600);
		};
	});

		var touch = $('#touch-menu');
	    var menu = $('.nav');
	 
	    $(touch).on('click', function(e) {
	        e.preventDefault();
	        menu.slideToggle();
	    });
	    $(window).resize(function(){
	        var wid = $(window).width();
	        if(wid > 760 && menu.is(':hidden')) {
	            menu.removeAttr('style');
	        }
	    });

$(window).load(function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

