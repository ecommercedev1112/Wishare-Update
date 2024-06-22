$('.faq-question').click(function(){
    const _index = $(this).closest('.faq-item').data('index');
    $(this).closest('.faq-list').find('.faq-item').each(function(index){
        if(_index != index) {
            $(this).removeClass('active');
        } else {
            $(this).toggleClass('active');
        }
    });
});

$('.video-play').click(function(){
    const video = $(this).closest('.pmwt-media-inner').find('video')[0];
    video.play();
    $(this).closest('.pmwt-media-inner').addClass('loaded-video');
});

$('.video-pause').click(function(){
    const video = $(this).closest('.pmwt-media-inner').find('video')[0];
    video.pause();
    $(this).closest('.pmwt-media-inner').removeClass('loaded-video');
});

$('.custom-multicoumns-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});

$('.custom-recommend-products').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});

$('.custom-featured-products-slider').slick({
    fade: true,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: window.arrows.icon_next,
    prevArrow: window.arrows.icon_prev,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                fade: false
            }
        }
    ]
});