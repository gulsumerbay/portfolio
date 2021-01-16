
jQuery(document).ready(function() {
	
	"use strict";
	if( !isMobile.any() ) {
		$('.left-nav').css({
			position: 'absolute',
			right: '120px'
			}
		);
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
$( "a" ).click(function() {
	$('.probootstrap-burger-menu').removeClass('active');
		$('body').removeClass('show');
});