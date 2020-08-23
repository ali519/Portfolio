$(document).ready(function() {
    $("#con").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    })
});

$(document).ready(function() {
    $("#por").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#portfolio").offset().top
        }, 2000);
    })
});