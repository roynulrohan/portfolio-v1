let currentSection = ''; // current section hash

// letters bounce animation
$('.animate').bind(
    'webkitAnimationEnd mozAnimationEnd animationend',
    function () {
        $(this).removeClass('animated');
    }
);

$('.animate').hover(function () {
    $(this).addClass('animated');
});

// on load
$(document).ready(function () {
    // on load repeats all functions for consistency between pages
    if ($('nav').offset().top < 10) {
        $('nav').removeClass('hidden');
        $('.previous').addClass('hidden');
    } else {
        $('nav').addClass('hidden');
        $('.previous').removeClass('hidden');
    }

    $('.content-panel').each(function () {
        if (isVisible($(this))) {
            $(this).removeClass('hidden');
        } else {
            $(this).addClass('hidden');
        }
    });

    $('section').each(function () {
        if (
            $(this).offset().top < window.pageYOffset + 400 &&
            //begins before top
            $(this).offset().top + $(this).height() > window.pageYOffset + 400
            //but ends in visible area
        ) {
            if ($(this).attr('id') != 'hero') {
                currentSection = '#' + $(this).attr('id');
            } else {
                currentSection = '';
            }
        }
    });

    $('.wrapper').removeClass('hidden');

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

// function to check if element is in view
function isVisible(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height() - 350;

    return elemBottom <= docViewBottom;
}

// content slide up animation
$(window).scroll(function () {
    $('.content-panel').each(function () {
        if (isVisible($(this))) {
            $(this).removeClass('hidden');
        } else {
            $(this).addClass('hidden');
        }
    });
});

// on scroll set currentSection hash to section in view
$(document).bind('scroll', function (e) {
    $('section').each(function () {
        if (
            $(this).offset().top < window.pageYOffset + 400 &&
            //begins before top
            $(this).offset().top + $(this).height() > window.pageYOffset + 400
            //but ends in visible area
        ) {
            if ($(this).attr('id') != 'hero') {
                currentSection = '#' + $(this).attr('id');
            } else {
                currentSection = '';
            }
        }
    });
});

// set hash on nav link click
$('.nav-link').click(function () {
    currentSection = $(this).attr('href');
});

// section next button
$('.next').click(function () {
    if (currentSection == '') {
        window.location.hash = 'about';
        currentSection = '#about';
    } else if (currentSection == '#about') {
        window.location.hash = '#projects';
        currentSection = '#projects';
    } else if (currentSection == '#projects') {
        window.location.hash = 'contact';
        currentSection = '#contact';
    }
});

// section previous button
$('.previous').click(function () {
    if (currentSection == '#contact') {
        window.location.hash = '#projects';
        currentSection = '#projects';
    } else if (currentSection == '#projects') {
        window.location.hash = '#about';
        currentSection = '#about';
    } else if (currentSection == '#about') {
        window.location.hash = '';
        currentSection = '';
    } else if (currentSection == '') {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            50
        );
    }
});
