(function ($) {
    var halo = {
        initReviewSlider: function () {
            var policyBlock = $('[data-custom-review]');

            policyBlock.each(function () {
                var self = $(this);

                if (self.not('.slick-initialized')) {
                    self.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false,
                        dots: false,
                        speed: 500,
                        infinite: false,
                        nextArrow: `<button type="button" class="slick-next" aria-label="Next" role="button"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.0003 45.8333C36.5063 45.8333 45.8337 36.5059 45.8337 25C45.8337 13.494 36.5063 4.16663 25.0003 4.16663C13.4944 4.16663 4.16699 13.494 4.16699 25C4.16699 36.5059 13.4944 45.8333 25.0003 45.8333Z" stroke="white" stroke-width="4.16667" stroke-linejoin="round"/>
                        <path d="M15.0957 25.5209H33.8457" stroke="white" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.4707 16.1459L33.8457 25.5209L24.4707 34.8959" stroke="white" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>`,
                        prevArrow: `<button type="button" class="slick-prev" aria-label="Previous" role="button"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.0003 45.8333C36.5063 45.8333 45.8337 36.5059 45.8337 25C45.8337 13.494 36.5063 4.16663 25.0003 4.16663C13.4944 4.16663 4.16699 13.494 4.16699 25C4.16699 36.5059 13.4944 45.8333 25.0003 45.8333Z" stroke="white" stroke-width="4.16667" stroke-linejoin="round"/>
                        <path d="M15.0957 25.5209H33.8457" stroke="white" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.4707 16.1459L33.8457 25.5209L24.4707 34.8959" stroke="white" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>`,
                        rtl: window.rtl_slick,
                        infinite: true,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    centerMode: false,
                                    arrows: false,
                                    dots: true,
                                    slidesToShow: 1.2,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });
                }
            });
        }
    }
    halo.initReviewSlider();
})(jQuery);