<?php
//登陆操作
    include ('conn.php');
    session_start();
    $conn = getConnect();
    $info=$_GET['info'];
	$username=$info[0];
	$password=$info[1];
    unset($_SESSION['ACCOUNT_NAME_IN_SESSION']);
    unset($_SESSION['USER_ID_IN_SESSION']);

    //查询数据库 存入 ID 和 NICKNAME PHOTO方便使用
    $conn = getConnect();
    // $password=md5($password);
    $sql = "select passengerName as name,account,userID from
    accountinfo inner join passengerinfo
    using (userID) WHERE account = '$username' AND password = '$password'";
    $result =$conn->query($sql);
    $row = $result->fetch_array();
    $res="";
    if (mysqli_num_rows($result) == 0)
    {
        closeConnect($conn);
        $conn = getConnect();
        $sql = "SELECT userID FROM accountinfo WHERE account = '$username'";
        $result =$conn->query($sql);
        if (mysqli_num_rows($result) == 0){
            $res = "wronginput";
        }
        else{
            $res = "wrongpwd";
        }

    }
    else{
        $_SESSION['ACCOUNT_NAME_IN_SESSION']=$row["name"];
        $_SESSION['USER_ID_IN_SESSION']=$row["userID"];
        $res = "ok";
    }
    closeConnect($conn);
    exit(json_encode($res));
?>