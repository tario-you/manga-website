$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
});
$(document).ready(function () {
    $(".custom-carousel .item").click(function () {
        $(".custom-carousel .item").not($(this)).removeClass("active_item");
        $(this).toggleClass("active_item");
    });
});
