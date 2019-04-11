//登录名
var flag = 0;
$('#username').focus(function(){
	$(this).css('border-color','#ccc');
	$('#error_msgmypasscode1').css('display','none');
	flag += 1;
})
$('#username').blur(function(){
	var username=$(this).val();
	if(username.length==0){
		$(this).css('border-color','#FF5757');
		$('#error_msgmypasscode1').css('display','block');
		$('#error_msgmypasscode1').text('登录名必须填写');
		flag += 1;
	}
})

//密码
$('#password').focus(function() {
	$(this).css('border-color','#ccc');
	$('#error_msgmypasscode2').css('display','none');
	flag += 1;
})
$('#password').blur(function() {
	var pwd=$(this).val();
	var username=$('#username').val();
	if(username.length==0) {
		$(this).css('border-color','#FF5757');
		$('#error_msgmypasscode1').css('display','block');
		$('#error_msgmypasscode1').text('登录名必须填写');
	}
	else if(pwd.length==0){
		$(this).css('border-color','#FF5757');
		$('#error_msgmypasscode2').css('display','block');
		$('#error_msgmypasscode2').text('密码必须填写');
	}

})
//登录
$('#loginSub').click(function() {
	if(flag == 2){
		if (($('#username').val().length != 0 ) && 
			($('#password').val().length != 0)) {
			var list = new Array();
			list[0] = $('#username').val();
			list[1] = $('#password').val();
				$.ajax({
		        url:'../php/login.php',
		        data:{
		        	'info':list
		        },  
		        type:'get',  
		        cache:false,  
		        dataType:'json',  
		        success:function(data) {
		        	// $('.login-txt span').text("您好,");
		        	// $('#login_user').text(data.name);
		         //    $('#regist_out').text("退出");
		         	if(data=="ok"){
		            	window.location.href = "../HomePage/index.html";
		         	}
			        else{
			        	if(data=="wronginput"){
			        		alert("账号输入错误");
			        	}
			        	else if(data=="wrongpwd"){
			        		alert("密码输入错误");
			        	}
			        }
		        }
		    })
		}
	}
	else if(flag == 0){
		$('#username').css('border-color','#FF5757');
		$('#error_msgmypasscode1').css('display','block');
		$('#error_msgmypasscode1').text('登录名必须填写');
	}
	else if(flag == 1){
		$('#password').css('border-color','#FF5757');
		$('#error_msgmypasscode2').css('display','block');
		$('#error_msgmypasscode2').text('密码必须填写');
	}

})

//注册
$('.btn200').click(function() {
	if($('.btn200').text()=="注册"){
		window.location.href = "../HomePage/index.html";
	}
	else{
		$.ajax({  
	        url:'../php/logout.php',
	        data:{
	        },  
	        type:'get',  
	        cache:false,  
	        dataType:'json',  
	        success:function(data) {
	        	window.location.href = "../Login/index.html";
	    	}
	    })
	}
})
