//Hamburger icon
$(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
});



// $(document).ready(function() {
//   $(window).scroll(function() {
//     if ($(document).scrollTop() > 5) {
//        $(".scroll-animate").removeClass("none");
//       $(".scroll-up").addClass("none");
//       $(".scroll-animate").css({"width": "100%"});
//       // $(".upper-nav").addClass("fixed");
//       $(".lower-nav").addClass("none");
//     } else {
//       $(".scroll-up").removeClass("none");
//       $(".scroll-animate").addClass("none");
//     }
//   });
// });


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
