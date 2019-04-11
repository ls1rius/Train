<?php
	header("Content-Type:text/html;charset=UTF-8");
	function getConnect()
	{
	    $ini_array = parse_ini_file("sql.ini");
	    $conn = mysqli_connect("localhost",$ini_array["username"],$ini_array["password"],$ini_array["database"]);
	    if (mysqli_connect_errno($conn))
	    {
	        die("连接 MySQL 失败: " . mysqli_connect_error());
	    }
	    $sql = "SET NAMES utf8";
	    mysqli_query($conn, $sql);
	    return $conn;
	}
	function closeConnect($conn)
    {
        mysqli_close($conn);
    }
?>
