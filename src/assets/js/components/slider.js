$(window).load(function () {
    $("#flexiselDemo1").flexisel();

    $("#flexiselDemo2").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        animationSpeed: 200,
        infinite: false,
        navigationTargetSelector: null,
        autoPlay: {
            enable: false,
            interval: 5000,
            pauseOnHover: true
        },
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1,
                itemsToScroll: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: {
                changePoint: 768,
                visibleItems: 3,
                itemsToScroll: 2
            }
        },

    });

    $("#flexiselDemo3").flexisel({
        visibleItems: 4,
        itemsToScroll: 2,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        }
    });

    $("#flexiselDemo4").flexisel({
        infinite: false
    });

});