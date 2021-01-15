$(window).on("scroll", function () {

    let visibleSections = [];

    $("section > [id], section[id]").each(function (index, elem) {
        if (isSectionVisible(elem.id)) {
            visibleSections.push(elem.id);
        }
    });

    if (visibleSections.length > 0) {
        $("#menu a")
            .removeClass("active")
            .filter("[href$=" + visibleSections[0] + "]")
            .addClass("active");
    }

    function isSectionVisible(id) {
        let windowHeight = document.documentElement.clientHeight;
        let elem = document.getElementById(id);
        let sectionPositionFromTop = elem.getBoundingClientRect().top;
        return (sectionPositionFromTop > -50) && (sectionPositionFromTop < windowHeight * 0.7);
    }
});

$("#menu a").on('click', function (event) {

    event.preventDefault();
    let hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function () {
        window.location.hash = hash;
    });
});

$("#sidebar-toggle").click(function (event) {
    event.stopPropagation();
    $(".sidebar").toggleClass("show");
});

$("body").click(function () {
    $(".sidebar").removeClass("show");
});