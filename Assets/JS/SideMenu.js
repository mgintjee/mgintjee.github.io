// Handles keeping an "a" selected
$('a').on('click', function(){
    $('a').removeClass('selected');
    $(this).addClass('selected');
});