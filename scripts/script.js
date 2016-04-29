$(document).ready(function($) {

    $(window).scroll(function() {
        // $(window).resize(function() {
            if ($(window).width() < 481) {
                var top = $(document).scrollTop();
                if (top > 100) {
                    $('.navbar-logo').css('display', 'none');
                    $('.navbar').css({
                    	'padding-top': '0',
                    	'transition': 'all 0.5s'
                    });
                    $('.navbar-nav').css('border', 'none');
                }
                else {
                    $('.navbar-logo').css('display', 'block');
                    $('.navbar').css({
                    	'padding-top': '0.5rem',
                    	'transition': 'all 0.25s'
                    });
                    $('.navbar-nav').css('border-top', '0.075rem solid rgba(255,255,255,0.25)');
                }
            }

        // });
    });

});
