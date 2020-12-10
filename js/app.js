$('.animate').bind(
    'webkitAnimationEnd mozAnimationEnd animationend',
    function () {
        $(this).removeClass('animated');
    }
);

$('.animate').hover(function () {
    console.log('here');
    $(this).addClass('animated');
});
