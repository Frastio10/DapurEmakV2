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
//popup 
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
// endpopup

$(".addaddress").click(function(){
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

$(".otheraddress").click(function(){
	    $('.popup-area-2').toggleClass('popup-actived');
	});

	$('.popup-close').click(function(){
	    $('.popup-area-2').removeClass('popup-actived');
	});

	$(".popup-area-2").click(function(event) {
		$(this).removeClass('popup-actived');
	});

	$('.coupon-box').click(function(event) {
		event.stopPropagation()
	});



$(document).on('click', '#trash-bin', function(event) {
    event.preventDefault();

    var obj = $(document).find('.check-item:checked');
    var sint = 0;
    setInterval(function() {
        $(obj[sint]).closest('.checkout-item').slideUp('fast')
        if (sint == obj.length) {
            this.clearInterval();
        }
        sint += 1;
    }, 400)

});

$(document).on('click', '.trash-bin', function(event) {
    event.preventDefault();

    var obj = $(document).find('.check-item:checked');
     $(this).closest('.checkout-item').slideUp('fast')
});