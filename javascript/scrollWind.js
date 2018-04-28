// For scrolliong window //
$(".navBtn").on("click", scrollWin);

function scrollWin(event) {
    event.preventDefault();
    var sectionName = $(this).data("name");
    $('html, body').animate({
        scrollTop: $("." + sectionName).offset().top
    }, 1000);

}