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
	$('#date_icon_2').css('background-position', '0 -250px');
});
$('#dc').click(function() {
	$('#back_train_date').attr('disabled', 'disabled');
	$('#date_icon_2').css('background-position', '0 -300px');
});



$('#fromStationText').kuCity();
$('#toStationText').kuCity();

$('#change_station').click(function() {
	var temp_city = $('#fromStationText').attr('value');
	$('#fromStationText').attr('value', $('#toStationText').attr('value'));
	$('#toStationText').attr('value', temp_city);
	$('#fromStationText').val(($('#fromStationText').attr('value')));
	$('#toStationText').val(($('#toStationText').attr('value')));
});



var picker_date = new Pikaday({ 
	numberOfMonths: 2,
	field: $('#train_date')[0],
});
var picker_date2 = new Pikaday({ 
	numberOfMonths: 2,
	field: $('#back_train_date')[0]
});

$('#query_ticket').click(function() {
	$(".loading").show().delay(3000).hide(1);
	if($("#queryLeftTable").css('display') == 'none')
		$("#queryLeftTable").css('display', '');
	$("#queryLeftTable").hide().delay(3000).show(1);
	if($("#sear-result p").css('display') == 'none')
		$("#sear-result p").css('display', '');
	$("#sear-result p").hide().delay(3000).show(1);
});

$('#date_range ul li').click(function() {
	$(this).attr('flag', '1');
	$(this).addClass('sel');
	$(this).siblings().attr('flag', '0');
	var date = $(this).children().eq(0).text();
	$('#train_date').attr('value', '2017-'+date);
	$('#train_date').val('2017-'+date);

	$(".loading").show().delay(3000).hide(1);
	if($("#queryLeftTable").css('display') == 'none')
		$("#queryLeftTable").css('display', '');
	$("#queryLeftTable").hide().delay(3000).show(1);
	if($("#sear-result p").css('display') == 'none')
		$("#sear-result p").css('display', '');
	$("#sear-result p").hide().delay(3000).show(1);
});

$('#date_range ul li').mouseover(function() {
	$(this).addClass('sel');
	$(this).siblings().removeClass('sel');
	$(this).mouseout(function() {
		$(this).removeClass('sel');
		$("#date_range ul li[flag='1']").addClass('sel');
	});

});

$('.loading').css('height', document.body.clientHeight);


$('#show_more').click(function() {
	if ($(this).hasClass('down')) {
		$(this).parent().css('top', '234px');
		$('#sear-sel-bd').css('height', '220px');
		$(this).removeClass('down').addClass('up');
	}
	else if ($(this).hasClass('up')) {
		$(this).parent().css('top', '58px');
		$('#sear-sel-bd').css('height', '44px');
		$(this).removeClass('up').addClass('down');
	}
});

























