$(document).ready(function () {

$('a').click(function(event) {
    event.preventDefault();
});

$('.readmore').click(function () {
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
});

$('.readless').click(function () {
    $('#show-this-on-click').slideUp();
    $('.readless').hide();
    $('.readmore').show();
});

$('.learnmore').click(function () {
    $('#learnmoretext').slideDown('fast');
    $('.learnmore').hide();
});
});






