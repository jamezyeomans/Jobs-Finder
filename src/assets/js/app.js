import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import './lib/paraxify';
import './lib/slick';

$(document).foundation();

//Top Bar Scroll Event
$(window).scroll(function(e){
    e.preventDefault();
    if(!$(window).scrollTop()) {
        $('header.fixed_header').removeClass('scrolled');
    }else{
        $('header.fixed_header').addClass('scrolled');
    }
});

// Paraxify Init
var myParaxify = paraxify('.paraxify');

// Slick Init

var homepageSlider = $('.homepage_slider_wrapper');

homepageSlider.slick({
	dots: true,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	speed: 500,
	fade: true,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnHover: false
});