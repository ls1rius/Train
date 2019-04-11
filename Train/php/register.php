<?php
	include("conn.php");
    include("globalFun.php");
	session_start();
    unset($_SESSION['ACCOUNT_NAME_IN_SESSION']);
    
    $info=$_GET['info'];
    $username=$info[0];
    $password=$info[1];
    $name = $info[2];
    $cardType = $info[3];
    $cardCode = $info[4];
    $email = $info[5];
    $mobileNum = $info[6];
    $passengerType = $info[7];

    $sex = getSex($cardCode);
    $dateOfBirth = getBirthDay($cardCode);
    $countryID = getCountry($cardCode);

	$conn = getConnect();
    $res = "ok";
	$sql = "INSERT INTO passengerinfo VALUES (null,'$cardCode' ,'$name','$sex','$dateOfBirth','$countryID','$cardType','0','$mobileNum',null,'$email',null,null)";
    
	if (!mysqli_query($conn, $sql) === TRUE)
    {
        $res = "wrong";
    }
    else {
        $sql = "SELECT userId FROM passengerinfo WHERE certificateID = '$cardCode' ";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_array($result);
        $userId = $row["userId"];
        $sql = "INSERT INTO accountinfo VALUES ('$username','$password','$userId' )";
        $_SESSION['USER_ID_IN_SESSION'] = $userId;
        $_SESSION['ACCOUNT_NAME_IN_SESSION'] = $name;
        if (!mysqli_query($conn, $sql) === TRUE)
        {
            $res = "wrong";
        }
        else{
            $sql = "INSERT INTO accountbindpassenger VALUES (null,'$username','$userId' )";
            if (!mysqli_query($conn, $sql) === TRUE)
            {
                $res = "wrong";
            }
        }
    }
    

    closeConnect($conn);
    echo json_encode($res);


?>