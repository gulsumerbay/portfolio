
jQuery(document).ready(function() {
	
	"use strict";
	if( !isMobile.any() ) {
		$('.left-nav').css({
			position: 'absolute',
			right: '120px'
			}
		);

		$('.btn-cv.w40').css({
			width: '40%'
			});

		$('.h-center').removeClass('width90');
	}
	// Your custom js code goes here.

});
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
	
	$('.btn-cv').css({
		'margin-right': 'auto',
		'margin-left': 'auto',
		display: 'block'
		});
$( "a" ).click(function() {
	$('.probootstrap-burger-menu').removeClass('active');
		$('body').removeClass('show');
});