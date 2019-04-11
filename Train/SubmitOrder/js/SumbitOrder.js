/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-02 12:12:32
 * @version $Id$
 */

var dataName = [
	{
		passenger_name : "张伟芳"
	},{
		passenger_name : "LQW"
	}
];

var html = $("#content_name").render(dataName);
$("#normal_passenger_id").append(html);

var dataPassenger = [
	{
		trID : "tr_1", 
		num : "1",
		name : "张伟芳",
		cardID : "330621",
		mobile : "18811112222",
		delID : "del_1"
	}
];

var html1 = $("#content-passenger").render(dataPassenger);
$("#ticketInfo_id").append(html1);


$("#add-per").click(function(){
       
    $("#add-item").css('display','block');
});

var i = 1;
$("#add-item-btn").click(function(){
	i++;
	var value = document.getElementById("passenger_name_x").value;
	var cardid = $("#passenger_id_no_x").val();
	var phone = $("#phone_no_x").val();

	if(value == "" || cardid == "" || phone == "") {
		alert("不能为空！");
	}
	else {	
		var dataPassenger1 = [
		{
			trID : "tr_" + i,
			num : i,
			name : value,
			cardID : cardid,
			mobile : phone,
			delID : "del_" + i
		}
		];
	    var htmlx = $("#content-passenger").render(dataPassenger1);
		$("#ticketInfo_id").append(htmlx);
		$("#passenger_name_x").val("");
		$("#passenger_id_no_x").val("");
		$("#phone_no_x").val("");
		$("#add-item").css("display", "none");
	}

	$("#del_1").click(function () {
		$("#tr_1").remove();
		i--;
	});

	$("#del_2").click(function () {
		$("#tr_2").remove();
		i--;
	});

	$("#del_3").click(function () {
		$("#tr_3").remove();
		i--;
	});

	$("#del_4").click(function () {
		$("#tr_4").remove();
		i--;
	});

	$("#del_5").click(function () {
		$("#tr_5").remove();
		i--;
	});
});



