// username
$('.reg-list .r-txt #userName').focus(function(){
	$(this).css('border-color','#ccc');
	$('#item1').css('display','none');
	$('#iok_userName').css('display', 'none');
})

$('.reg-list .r-txt #userName').blur(function(){
	var username=$(this).val();
	if(username.length==0){
		$(this).css('border-color','#FF5757');
		$('#item1').css('display','block');
	}
	else{
		reg=/^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9_\u4E00-\u9FA5]{5,29}$/;
		if(username.length<6 || username.length>30){
			$('#item1').css('display', 'block');
			$(this).css('border-color','#FF5757');
			$('#item1').text('用户名长达不符');
		}
		else if(!reg.test(username)){
			$('#item1').css('display', 'block');
			$(this).css('border-color','#FF5757');
			$('#item1').text('用户名只能由字母、数字和_组成,须以字母开头！');
		}
		else{
			var info=new Array();
			info[0]=username;
			$.ajax({  
			      url:'../php/userVerify.php',
			      data:{
			          'info':info
			      },  
			      type:'get',  
			      cache:false,  
			      dataType:'json',  
			      success:function(data) {
			          if(data=='wrong'){
			           $('#item1').css('display', 'block');
			           	$(this).css('border-color','#FF5757');
			           	$('#item1').text('用户名已存在!');
			          }
			          else if(data=='ok'){
			           $('#iok_userName').css('display', 'block');
			          }
			      },  
			      error : function() {  
			          alert("异常！");  
			      }  
			  }) 
			
		}
	}
})

//密码
$('.reg-list .r-txt #passWord').focus(function(){
	$(this).css('border-color','#ccc');
	$('#item2').css('display','none');
	$('#iok_passWord').css('display', 'none');
})
$('.reg-list .r-txt #passWord').blur(function(){
	var pwd=$(this).val();
	reg=/^([A-Z]|[a-z]|[0-9]|[`~!@#$%^&*()+=|{}.<>~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]){6,20}$/;
	alpha=/^(\w)\1*$/;
	if(pwd.length==0){
		$(this).css('border-color','#FF5757');
		$('#item2').css('display','block');
		$('#item2').text('请输入密码');
	}
	else if(pwd.length<6 || pwd.length>20){
		$('#item2').css('display', 'block');
		$('#item2').text('密码长度不符');
	}
	else if(!reg.test(pwd)){
		$('#item2').css('display','block');
		$('#item2').text('非法字符，请使用字母加数字或符号的组合，6-20个字符');

	}
	else if(alpha.test(pwd)){
		if(pwd[0]>='0' && pwd[0]<='9'){
			$('#item2').css('display','block');
			$('#item2').text('不能为同一数字');
		}
		else{
			$('#item2').css('display','block');
			$('#item2').text('不能为同一字母');
		}
	}
	else{
		$('#iok_passWord').css('display', 'block');
	}
});

//监听密码强度
$('.reg-list .r-txt #passWord').bind('input propertychange', function() {
   var pwd=$(this).val();
   if(pwd.length!=0){
   		$('.safe-rank').css('display', 'inline-block');

   		reg1=/^(?:\d+|[a-zA-Z]+|[!@#$%^&*+-]+)$/;
   		reg3=/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*+-]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*+-]+$)(?![\d!@#$%^&*+-]+$)[a-zA-Z\d!@#$%^&*+-]+$/;
   		
   		if(reg1.test(pwd)){
   			$('.s1').css('background', '#f00');
   			$('.s2').css('background', '#999');
   			$('.s3').css('background', '#999');

   		}
   		else if(reg3.test(pwd)){
   			$('.s1').css('background', '#f00');
   			$('.s2').css('background', '#f00');
   			$('.s3').css('background', '#f00');
   		}
   		else{
   			$('.s1').css('background', '#f00');
   			$('.s2').css('background', '#f00');
   			$('.s3').css('background', '#999');
   		}
   }
   else{
   		$('.safe-rank').css('display', 'none');
   }

})

//确认密码
$('.reg-list .r-txt #confirmPassWord').focus(function(){
	$(this).css('border-color','#ccc');
	$('#item3').css('display','none');
	$('#iok_confirmPassWord').css('display', 'none');
})
$('.reg-list .r-txt #confirmPassWord').blur(function(){
	var cnfpwd=$(this).val();
	if(cnfpwd.length==0){
		$(this).css('border-color','#FF5757');
		$('#item3').css('display','block');
	}
	else{
		var pwd=$('.reg-list .r-txt #passWord').val();
		if(cnfpwd!=pwd)
		{
			$(this).css('border-color','#FF5757');
			$('#item3').css('display','block');
			$('#item3').text('两次密码不一致');
		}
		else{
			$('#iok_confirmPassWord').css('display', 'block');
		}
		
	}

})

//姓名
$('.reg-list .r-txt #name').focus(function(){
	$(this).css('border-color','#ccc');
	$('#item4').css('display','none');
	$('#iok_name').css('display', 'none');
})

$('.reg-list .r-txt #name').blur(function(){
	var name=$(this).val();
	if(name.length==0){
		$(this).css('border-color','#FF5757');
		$('#item4').css('display','block');
	}
	else{
		$('#iok_name').css('display', 'block');
	}
})

//证件号码
$('.reg-list .r-txt #cardCode').focus(function(){
	$(this).css('border-color','#ccc');
	$('#item5').css('display','none');
	$('#iok_cardcode').css('display', 'none');
})
$('.reg-list .r-txt #cardCode').blur(function(){
	var cardcode=$(this).val();
	reg=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
	if (cardcode.length==0) {
		$(this).css('border-color', '#FF5757');
		$('#item5').css('display','block');
	}
	else if (cardcode.length!=18) {
		$(this).css('border-color', '#FF5757');
		$('#item5').css('display','block');
		$('#item5').text('证件号码长度不符！');
	}
	else if (!reg.test(cardcode)) {
		$(this).css('border-color', '#FF5757');
		$('#item5').css('display','block');
		$('#item5').text('非法证件号！');
	}
	else{
		$('#iok_cardcode').css('display', 'block');
	}
})

//邮箱
$('.reg-list .r-txt #email').focus(function(){
	$(this).css('border-color','#ccc');
	$('#item6').css('display','none');
	$('#iok_email').css('display', 'none');
})
$('.reg-list .r-txt #email').blur(function(){
	var email=$(this).val();
	reg=/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
	if (email.length==0) {
		$(this).css('border-color','#FF5757');
		$('#item6').css('display','block');
		$('#item6').text('邮箱不能为空');
	}
	else if(!reg.test(email)){
		$(this).css('border-color','#FF5757');
		$('#item6').css('display','block');
		$('#item6').text('邮箱非法');
	}
	else{
		$('#iok_email').css('display', 'block');
	}
})

//手机
$('.reg-list .r-txt #mobileNo').focus(function(){
	$(this).css('border-color','#ccc');
	$('#item7').css('display','none');
	$('#iok_phone').css('display', 'none');
})
$('.reg-list .r-txt #mobileNo').blur(function(){
	var phone=$(this).val();
	reg=/^0?(13[0-9]|15[012356789]|18[01236789]|14[57])[0-9]{8}$/;
	if(phone.length==0){
		$(this).css('border-color','#FF5757');
		$('#item7').css('display','block');
		$('#item7').text('手机号码不能为空');
	}
	else if(!reg.test(phone)){
		$(this).css('border-color','#FF5757');
		$('#item7').css('display','block');
		$('#item7').text('手机号码非法');
	}
	else{
		$('#iok_phone').css('display', 'block');
	}
})

$('#nextBtn').click(function(){
	var flag=0;
	if($('#iok_userName').css('display')=='block')
		flag+=1;
	if($('#iok_passWord').css('display')=='block')
		flag+=1;
	if($('#iok_confirmPassWord').css('display')=='block')
		flag+=1;
	if($('#iok_name').css('display')=='block')
		flag+=1;
	if($('#iok_cardcode').css('display')=='block')
		flag+=1;
	if($('#iok_email').css('display')=='block')
		flag+=1;
	if($('#iok_phone').css('display')=='block')
		flag+=1;
	if (flag == 7) {
		//next
		var info=new Array();
		info[0]=$('#userName').val();
    	info[1]=$('#passWord').val();
    	info[2]=$('#name').val();
    	info[3]=$('#cardType').val();
    	info[4]=$('#cardCode').val();
    	info[5]=$('#email').val();
    	info[6]=$('#mobileNo').val();
    	info[7]=$('#passengerType').val();
	    $.ajax({  
			url:'../php/register.php',
			data:{
				'info':info
			},  
			type:'get',  
			cache:false,  
			dataType:'json',  
			success:function(data) {
				if(data=='ok'){
	    			alert('注册成功');
	    			window.location.href = "../HomePage/index.html";
				}
	    		else
	    			alert('注册失败,数据库崩溃!');
			}
		})
	}
	else{
		alert("请完善注册信息");
	}
})