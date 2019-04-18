$(document).on('change', '#select-all', function(event) {
    event.preventDefault();
    if($(this).prop('checked') == true) {
        $(".check-item").prop('checked', true)
         $(".trash-bin").on('click', function(event) {
        	$(".item-1").hide();
          });
        
    } else { 
        $(".check-item").prop('checked', false)
    };

   //  $(".trash-bin").on('click', '.', function(event) {http://127.0.0.1:8080/assets/images/icon/garbage.svg
   //  	event.preventDefault();
 		// if($(".check-item").prop('checked') == true) {

 		// }
   //  });

});

	$('.popup-trigger').click(function(){
	    $('.popup-area-search').toggleClass('popup-active');
	});

	$('.close-popup').click(function(){
	    $('.popup-area-search').removeClass('popup-active');
	});

	$("#popup-button").click(function(){
	    $('.popup-area').toggleClass('popup-actived');
	});

	$('.popup-close').click(function(){
	    $('.popup-area').removeClass('popup-actived');
	});

	$(".popup-area").click(function(event) {
		$(this).removeClass('popup-actived');
	});

	$('.coupon-box').click(function(event) {
		event.stopPropagation()
	});

