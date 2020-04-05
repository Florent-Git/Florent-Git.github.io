$(function() {
    let slide_text = $(".slide-text");
    let more_info = $(".more-info");
    slide_text.hide();
    more_info.hide();
    slide_text.fadeIn(1000, () => more_info.fadeIn(1000))
});