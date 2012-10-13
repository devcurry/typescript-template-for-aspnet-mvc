$(document).ready(function () {
    $(".btn-slide").click(function () {
        $("#body").slideToggle("slow");
        $(this).toggleClass("active");
    });
});
