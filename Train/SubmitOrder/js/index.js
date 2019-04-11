$('.nav ul li').click(function() {
	$(this).children('.navListItem').addClass('current');
	$(this).siblings().children('.navListItem').removeClass('current');
})



$('.menu-bd').mouseover(function() {
	$('.menu-list').css('display','block');
});
$('.menu-bd').mouseout(function() {
	$('.menu-list').css('display','none');
});
$('.menu-list').mouseover(function() {
	$('.menu-list').css('display','block');
});
$('.menu-list').mouseout(function() {
	$('.menu-list').css('display','none');
});


$('.nav ul li:eq(4)').mouseover(function() {
	$('.nav-list').css('display','block');
});
$('.nav ul li:eq(4)').mouseout(function() {
	$('.nav-list').css('display','none');
});
$('.nav-list').mouseover(function() {
	$('.nav-list').css('display','block');
});
$('.nav-list').mouseout(function() {
	$('.nav-list').css('display','none');
});



$('.ban-area .i-close').click(function() {
	$('.ban-area').css('display','none');
});



$('#wf').click(function() {
	$('#back_train_date').removeAttr('disabled');
});
$('#dc').click(function() {
	$('#back_train_date').attr('disabled', 'disabled');
});



$('.inp-from').kuCity();
$('.inp-to').kuCity();

$('#change_station').click(function() {
	var temp_city = $('.inp-from').attr('value');
	$('.inp-from').attr('value', $('.inp-to').attr('value'));
	$('.inp-to').attr('value', temp_city);
	$('.inp-from').val(($('.inp-from').attr('value')));
	$('.inp-to').val(($('.inp-to').attr('value')));
});



var picker_date = new Pikaday({ 
	numberOfMonths: 2,
	field: $('#train_date')[0],
});
var picker_date2 = new Pikaday({ 
	numberOfMonths: 2,
	field: $('#back_train_date')[0]
});



$('.slideTxt .hd ul li').mouseover(function() {
	$(this).siblings().removeClass('on');
	$(this).addClass('on');
	var num=$(this).attr('val');
	$('.bd').children().css('display', 'none');
	$('#bd_item' + num).css('display', 'block');
});

























