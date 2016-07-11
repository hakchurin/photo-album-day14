$('.second_page').addClass('hidden');
$('.third_page').addClass('hidden');




  $('.firstPageDiv').on('click', function() {
  $('.second_page').removeClass('hidden');
  $('.first_page').addClass('hidden');
  $('img').addClass('hidden');


});

$('#album1').on('click', function(){
$('.animals').removeClass('hidden');
$('.baby').addClass('hidden');
$('.dino').addClass('hidden');
$('.food').addClass('hidden');
$('.nature').addClass('hidden');
$('.travel').addClass('hidden');



});

$('#album2').on('click', function(){
$('.baby').children('img').removeClass('hidden');
$('.animals').addClass('hidden');
$('.dino').addClass('hidden');
$('.food').addClass('hidden');
$('.nature').addClass('hidden');
$('.travel').addClass('hidden');
$('.second_page').children('#').removeClass('hidden');
});


$('#album3').on('click', function(){
$('.dino').children('img').removeClass('hidden');
$('.animals').addClass('hidden');
$('.baby').addClass('hidden');
$('.food').addClass('hidden');
$('.nature').addClass('hidden');
$('.travel').addClass('hidden');

});


$('#album4').on('click', function(){
$('.food').children('img').removeClass('hidden');
$('.animals').addClass('hidden');
$('.baby').addClass('hidden');
$('.dino').addClass('hidden');
$('.travel').addClass('hidden');
$('.nature').addClass('hidden');

});

$('#album5').on('click', function(){
$('.nature').children('img').removeClass('hidden');
$('.animals').addClass('hidden');
$('.baby').addClass('hidden');
$('.food').addClass('hidden');
$('.dino').addClass('hidden');
$('.travel').addClass('hidden');
});

$('#album6').on('click', function(){
$('.travel').children('img').removeClass('hidden');
$('.animals').addClass('hidden');
$('.baby').addClass('hidden');
$('.food').addClass('hidden');
$('.dino').addClass('hidden');
$('.nature').addClass('hidden');

});





$('button').on('click', function() {
$('.second_page').removeClass('hidden');
$('.third_page').addClass('hidden');
});
