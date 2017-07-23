$(document).ready(function () {
	$('.photo').fancybox({});

	$('#menu').on("click", "a", function(event){
		event.preventDefault();

		var id = $(this).attr('href');

		var top = $(id).offset().top;

		$('body, html').animate({scrollTop: top-100}, 1000);
	});


	var top_show = 900;
	$(window).scroll(function(){
		if($(this).scrollTop() >= 900) {
			$("#scrollTopBtn").fadeIn();
		}
		else {
			$("#scrollTopBtn").fadeOut();
		}
	});


	$("#scrollTopBtn").click(function() {
		$('body, html').animate({scrollTop: 0}, 1000);
	});
});



