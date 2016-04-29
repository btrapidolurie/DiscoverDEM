$(document).ready(function($) {

    $(window).scroll(function() {
        $(window).resize(function() {
            if ($(window).width() < 481) {
                var top = $(document).scrollTop();
                if (top > 0) {
                    $('.dd').css('display', 'none');
                }
                // else {
                //     $('.navbar').removeClass('navbar-shadow');
                // }
            }

        });
    });

});
