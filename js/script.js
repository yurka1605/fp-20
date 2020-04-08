$( document ).ready(function() {
    
});

$(window).on('scroll', function() {
    // $(window).scrollTop() > $('.main').offset().top ? 
    //     $('.fixed-form').addClass('show') : $('.fixed-form').removeClass('show');
});

/** ======================== User actions ========================== **/
// scrool top
$('.footer .further__arrow').on('click', function(e) {
    e.preventDefault();
    $('body, html').animate({ 
        scrollTop: 0,
    }, 300, 'swing');
})

$('.slider__control').on('click', function(e) {
    e.preventDefault();
    const slider = $(this).parent().parent();
    changeSlide(slider, $(this).hasClass('left'));
});
/** ======================== END:User actions ========================== **/


/** ======================== Functions ========================== **/
// main change slide
function changeSlide(slider, arrow) {
    var slides = $(slider).children('.slide');
    var firtsSlide = slides[0];
    var lastNum = slides.length;
    var current = $(slider).children('.slide.active');
    var num = $(current).data('num');

    if (arrow) {
        num = num === 1 ? lastNum : num - 1;
    } else {
        num = num === lastNum ? 1 : num + 1;
    }
    
    var left = $(firtsSlide).width() * (num - 1) + 30 * (num - 1);
    $( firtsSlide ).animate({ marginLeft: `${ - left }px`}, 200);
    $(current).removeClass('active');
    $(slides[num - 1]).addClass('active');
}
/** ======================== END:Functions ========================== **/