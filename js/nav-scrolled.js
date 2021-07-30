$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
    $('.hero_nav-wrapper').addClass('hero_nav-wrapper-scrolled');
}
else {
    $('.hero_nav-wrapper').removeClass('hero_nav-wrapper-scrolled');
}
});