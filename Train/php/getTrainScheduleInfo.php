<?php
	header("Content-Type:text/html;charset=UTF-8");
	include('conn.php');
	$sql = "select trainShiftID,orderInSechedule,setOffStation,trainFrequency,
arriveStation,routePrice,setoffTime,arriveTime,trainType,trainNum
from traininfo  as I inner join
(select trainShiftID,setOffStation, arriveStation,routePrice,setoffTime,arriveTime,trainID,orderInSechedule,trainFrequency 
			from trainshift as D inner join 
			(select setoffStation ,M.stationName as arriveStation,
			trainShiftID,orderInSechedule,trainFrequency ,setoffTime,arriveTime,routePrice
			from stationname as M
			inner join (select N.stationName as setoffStation ,arriveStationID,trainShiftID,orderInSechedule,trainFrequency ,setoffTime,arriveTime,routePrice
			from stationname as N 
			inner join trainschedule as S 
			ON N.stationID = S.setoffStationID) as S
			ON M.stationID = S.arriveStationID) as B
			 using (trainShiftID) ) as T 
using (trainID)
order by trainShiftID asc;
";
	$conn = getConnect();
	$res = mysqli_query($conn, $sql);
	if (!mysqli_query($conn, $sql) == TRUE)
    {
        $res = "wrong";
        closeConnect($conn);
    	echo json_encode($res);
       
    }
    else{
	    while ($row = mysqli_fetch_array($res)) {
			//汇总输出
			$info[] = array('trainShiftID' => $row['trainShiftID'], 'orderInSechedule' => $row['orderInSechedule'],'setoffStation' => $row['setoffStation'], 'arriveStation' => $row['arriveStation'], 'routePrice' => $row['routePrice'], 'setoffTime' => $row['setoffTime'], 'arriveTime' => $row['arriveTime'],'trainType' => $row['trainType'],'trainNum' => $row['trainNum']);

			$trainFrequency = $row['trainFrequency'];

			$sql_ticketRest = "select count(*) as ticketRest , seatTypeEng
			from seatinfo as M inner join seattypeinfo as T
			using (seatTypeID)
			where trainFrequency = '$trainFrequency'
			group by seatType;
			";
			$rs_ticketRest = mysqli_query($conn, $sql_ticketRest);
			while ($row_ticketRest = mysqli_fetch_array($rs_ticketRest)){
				// $info[] = array('ticketRest' => $row_ticketRest['ticketRest'],'seatType' => $row_ticketRest['seatType']);
				// array_push($info[sizeof($info)-1],array('ticketRest' => $row_ticketRest['ticketRest'],'seatType' => $row_ticketRest['seatType']));
				$info[sizeof($info)-1][$row_ticketRest['seatTypeEng']] = $row_ticketRest['ticketRest'];
			}
		}
		closeConnect($conn);
    	echo json_encode($info);
	}


?>