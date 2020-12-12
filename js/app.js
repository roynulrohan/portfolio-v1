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
        if ($('nav').offset().top < 10) {
            $('nav').removeClass('hidden');
            $('.previous').addClass('hidden');
        } else {
            $('nav').addClass('hidden');
            $('.previous').removeClass('hidden');
        }
    });
});

sections = $('section');
s = 0;

$('.next').click(function () {
    if (s < sections.length - 1) {
        s++;
        $('html, body').animate(
            {
                scrollTop: sections.eq(s).offset().top,
            },
            50
        );
    }
});

$('.previous').click(function () {
    if (s > 0) {
        s--;
        $('html, body').animate(
            {
                scrollTop: sections.eq(s).offset().top,
            },
            50
        );
    } else {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            50
        );
    }
});
