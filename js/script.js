$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});

$('#nav-icon3').click(function () {
    $('.wrapper').toggleClass('moveright');
});

$('.category').click(function () {
    $('.subcat').slideUp("slow");
    var hello=$(this).parent(".menuset");
    console.log(hello);
    $(hello).find('.subcat').slideToggle("slow");
});

$('.wcprod_iconimg').click(function(){
   var catname = $(this).attr('data');
    $('.all').fadeOut();
    $(catname).fadeIn();
});