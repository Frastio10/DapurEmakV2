function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  var number = document.getElementById('number').value;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  var number = document.getElementById('number').value;
  document.getElementById('number').value = value;
}

var increase = document.getElementById("increment");
increase.addEventListener("click",function() {
  increaseValue();
}); 

var decrease = document.getElementById("decrement");
decrease.addEventListener("click",function() {
  decreaseValue();
}); 


$('a[href^="#buy"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


$(".heart-toggle").on('click',function(e) {
    $(this).toggleClass('liked');
});