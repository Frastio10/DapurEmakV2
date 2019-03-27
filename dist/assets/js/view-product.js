function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  var number = document.getElementById('number').value;
  var jumbel = document.getElementById('jumbel').value;
  var price = document.getElementById('price');
  var subtotal = value * 25000;
  document.getElementById('number').value = value;
  document.getElementById('jumbel').innerHTML = value;
  document.getElementById('subtotal').innerHTML = subtotal;

}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
   var number = document.getElementById('number').value;
  var jumbel = document.getElementById('jumbel').value;
  var price = document.getElementById('price');
  var subtotal = value * 25000;
  document.getElementById('number').value = value;
  document.getElementById('jumbel').innerHTML = value;
  document.getElementById('subtotal').innerHTML = subtotal;
}

$('#pesann').on('click', function(e){
	$('#pesan-box').addClass("pesan-box-active");
})

$('a[href^="#buy"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$("#increase").on('click', function(e){
	$
})