$(function(){
 	$.ajax({  
        url:'../php/getUserInfo.php',
        data:{
        	
        },  
        type:'get',  
        cache:false,  
        dataType:'json',  
        success:function(data) {
        	$('#welWords').text("您好,");
        	$('#login_user').text(data.name);
            $('#regist_out').text("退出");
            // window.location.href = "../HomePage/index.html";
        }
    })


	$('#regist_out').click(function(){
		if($(this).text()=='退出'){
			$.getJSON("../php/logout.php",function(data){
				
			})
            window.location.href = "../Login/index.html";
		}
        else{
            window.location.href = "../Register/index.html";
        }
	})
    $('#login_user').click(function(){
        if($(this).text()=='登录'){
            window.location.href = "../Login/index.html";
        }
        else{
            
        }
    })

})
