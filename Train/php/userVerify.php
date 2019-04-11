<?php
	include("conn.php");
	session_start();

    $info=$_GET['info'];
    $username = $info[0];

	$conn = getConnect();
    // $password=md5($password)
    $res = "ok";
    $sql = "SELECT userId FROM accountinfo WHERE account = '$username'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
	if (mysqli_num_rows($result) == 0)
    {
        $res = "ok";
    }
    else {
        $res = "wrong";
    }
    closeConnect($conn);
    exit(json_encode($res));
?>