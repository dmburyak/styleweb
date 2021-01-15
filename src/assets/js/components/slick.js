$('#slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    lazyLoad: 'progressive',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                infinite: true
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: true
            }
        }
    ]
});