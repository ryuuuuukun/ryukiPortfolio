$(function(){
  $('#jsi-btn-hamburger').click(function() {
    $(this).toggleClass("active");
      if ($(this).hasClass('active')) {
        $('.nav-menu').addClass('active');
      } else {
        $('.nav-menu').removeClass('active');
      }
  });
});

$(function(){
 $(window).on('load',function(){
   $("#pageloading-wrap").delay(1000).fadeOut('slow');
 });
 function loaderClose(){
   $("#pageloading-wrap").fadeOut('slow');
 }
 setTimeout(loaderClose,2000);
});