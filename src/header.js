$(function () {
    let slideshow = $(".slideshow");
    let navbar = $(".navbar");
    if (slideshow[0] === undefined) {
        navbar.addClass("bg-dark");
    } else {
        $(window).scroll(function () {
            if (window.scrollY + navbar[0].offsetHeight > slideshow[0].scrollHeight) {
                navbar.addClass("bg-dark", 300);
            } else {
                navbar.removeClass("bg-dark");
            }
        });
    }
});