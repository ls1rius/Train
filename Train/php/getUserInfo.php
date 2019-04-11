<?php
    session_start();
    include('conn.php');
    $list["name"] = $_SESSION['ACCOUNT_NAME_IN_SESSION'];
    $list["userID"] = $_SESSION['USER_ID_IN_SESSION'];
    exit(json_encode($list));
?>