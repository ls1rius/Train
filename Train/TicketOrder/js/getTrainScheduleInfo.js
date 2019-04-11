$(function(){
 	$.ajax({  
        url:'../php/getTrainScheduleInfo.php',
        data:{
        	
        },  
        type:'get',  
        cache:false,  
        dataType:'json',  
        success:function(data) {
        	
            $.each(data, function(key, value) {
                var appendHtml = '<tr class="bgc">';
                appendHtml += '<td colspan="4" width="370">';
                appendHtml += '<div class="ticket-info clearfix">';
                appendHtml += '<div class="train">';
                appendHtml += '<div>';
                appendHtml += '<a class="number">'+value.trainType+value.trainNum+'</a>';
                appendHtml += '</div>';
                appendHtml += '<b title="查看票价" class=""></b>';
                appendHtml += '</span>';
                appendHtml += '</div>';
                appendHtml += '<div class="cdz">';
                appendHtml += '<strong>'+value.setoffStation+'</strong>';
                appendHtml += '<strong>'+value.arriveStation+'</strong>';
                appendHtml += '</div>';
                appendHtml += '<div class="cds">';
                appendHtml += '<strong class="start-t">'+value.setoffTime+'</strong>';
                appendHtml += '<strong class="color999">'+value.arriveTime+'</strong>';
                appendHtml += '</div>';
                appendHtml += '<div class="ls">';
                appendHtml += '<strong>'+getClock((getSeconds(value.arriveTime)-getSeconds(value.setoffTime)))+'</strong>';
                appendHtml += '<span>当日到达</span>';
                appendHtml += '</div>';
                appendHtml += '</div>';
                if(value.businessSeat!=null)
                    appendHtml += '<td width="46" align="center" style="cursor: pointer;" class="yes">'+value.businessSeat+'</td>';
                else
                    appendHtml += '<td width="46" align="center" style="cursor: pointer;">--</td>';
                if(value.firstClass!=null)
                    appendHtml += '<td width="46" align="center" style="cursor: pointer;" class="yes">'+value.firstClass+'</td>';
                else
                    appendHtml += '<td width="46" align="center" style="cursor: pointer;">--</td>';
                if(value.secondClass!=null)
                    appendHtml += '<td width="46" align="center" style="cursor: pointer;" class="yes">'+value.secondClass+'</td>';
                else
                    appendHtml += '<td width="46" align="center" style="cursor: pointer;">--</td>';
                appendHtml += '<td width="46" align="center" style="cursor: pointer;">--</td>';
                appendHtml += '<td width="46" align="center" style="cursor: pointer;" class="yes">有</td>';
                appendHtml += '<td width="46" align="center" style="cursor: pointer;">--</td>';
                appendHtml += '<td width="46" align="center" style="cursor: pointer;" class="yes">有</td>';       
                appendHtml += '<td width="46" align="center" style="cursor: pointer;">--</td>';
                appendHtml += '<td width="46" align="center" style="cursor: pointer;" class="yes">有</td>';        
                appendHtml += '<td width="46" align="center" style="cursor: pointer;" class="yes">有</td>';         
                appendHtml += '<td width="46" align="center" style="cursor: pointer;">--</td>'; 
                appendHtml += '<td align="center" class="no-br" width="80">';    
                appendHtml += '<a href="../SubmitOrder/index.html" class="btn72" >预订</a>';    
                appendHtml += '</td>';
                appendHtml += '</tr>';
                $('#queryLeftTable').append(appendHtml);
            })
        }
    })

})
function getSeconds(str){
    var seconds = 0;
    if(str.length==8){
        seconds += parseInt(str.substr(7,1));
        seconds += parseInt(str.substr(6,1))*10;
        seconds += parseInt(str.substr(4,1))*60;
        seconds += parseInt(str.substr(3,1))*10*60;
        seconds += parseInt(str.substr(1,1))*60*60;
        seconds += parseInt(str.substr(0,1))*10*60*60;
    }
    else if(str.length==7){
        seconds += parseInt(str.substr(6,1));
        seconds += parseInt(str.substr(5,1))*10;
        seconds += parseInt(str.substr(3,1))*60;
        seconds += parseInt(str.substr(2,1))*10*60;
        seconds += parseInt(str.substr(0,1))*60*60;
    }
    return seconds;
}
function getClock(seconds){
    
    return addZero(parseInt(seconds/60/60))+":"+addZero(parseInt(seconds/60)-parseInt(seconds/60/60)*60)+":"+addZero(seconds%60%60);
}
function addZero(num){
    var str="";
    if(num<10&&num>0)
        str = "0"+num;
    else if(num == 0)
        str = "00";
    else
        str = num;
    return str;
}