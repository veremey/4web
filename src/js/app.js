$(document).ready( function() {
	//клик на кнопку меню - показывает\прячет меню

	$('.menu').on('click', function(){
		$('.header__menu').toggleClass('is_active');
	});



}); // ready

	// carousel

	$(".slick-slideshow").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		dots: true,
	});

	$(".case_slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		dots: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$(".comment__slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		dots: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	$(".casein__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		dots: false,
	});


if($(document).width() < 767) {
	$('.crumbs').click(function() {
		$(this).children('li').toggleClass('show');
	});

	$('.crumbs li').click(function() {
		$(this).addClass('is_active').siblings().removeClass('is_active');
	});
};
