$(document).ready(function($) {

    $(window).scroll(function() {
    	var top = $(document).scrollTop();
        if (top > 0) {
            $('.navbar').addClass('navbar-shadow');
        } else {
            $('.navbar').removeClass('navbar-shadow');
        }
    });

});
