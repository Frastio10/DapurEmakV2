//Hamburger icon
$(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
    $('.lower-menu').toggleClass('lower-menu-active');
  });
});




  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $(".header-wrapper").addClass("bg-white");
        $(".header-wrapper").addClass("pt-10");
         $(".header-wrapper").addClass("top");
          $(".header-wrapper").addClass("bshad-thin");
       $(".scroll-animate").removeClass("none");
        $(".scroll-animate").addClass("block");
      $(".scroll-up").addClass("none");
      $(".nav-none").addClass("none");
      $(".header-wrapper").addClass("fixed");
     $(".scroll-animate").removeClass("absolute");
     $("#nav-line").addClass("none");
    } else {
      $(".scroll-up").removeClass("none");
      $(".nav-none").removeClass("none");
      $(".header-wrapper").removeClass("pt-10");
       $(".header-wrapper").removeClass("top");
      $(".scroll-animate").addClass("none");
        $(".header-wrapper").removeClass("bshad-thin");
        $(".header-wrapper").removeClass("bg-white");
      $("#nav-line").removeClass("none");
    }
  });


$('#vid-1').click(function(e){
  $('.popup-area').addClass('activex');
  var data = $(this).data('url');
  $('.vids-1').attr('src',data);
});

$('#vid-2').click(function(e){
  $('.popup-area').addClass('activex');
  var data = $(this).data('url');
  $('.vids-1').attr('src',data);
});

$('.close-vid').click(function(e){
  $('.popup-area').removeClass('activex');
  $('.vids-1').attr('src',"");
});

$('.popup-area').click(function(e){
   $('.popup-area').removeClass('activex');
   $('.vids-1').attr('src',"");
});

$('.popup-vid').click(function(e){
  event.stopPropagation();
});

