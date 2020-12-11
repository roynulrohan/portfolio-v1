$('.animate').bind(
    'webkitAnimationEnd mozAnimationEnd animationend',
    function () {
        $(this).removeClass('animated');
    }
);

$('.animate').hover(function () {
    $(this).addClass('animated');
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($('nav').offset().top < 100) {
            $('nav').removeClass('hidden');
        } else {
            $('nav').addClass('hidden');
        }
    });
});
