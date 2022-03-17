//menu hover
$(document).ready(function () {
    $("img").hover(function () {
        $(".content").toggle();
        $(".walrus-hidden").toggle();
    });
});