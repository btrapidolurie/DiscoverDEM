$(document).ready(function($) {

    var top = $(document).scrollTop();

    $(window).scroll(function() {
        if (top > 0) {
            $('.navbar').addClass('navbar-shadow');
        } else {
            $('.navbar').removeClass('navbar-shadow');
        }
    });

});
