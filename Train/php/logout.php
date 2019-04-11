<?php
//登出操作 删除SESSION的一些信息
    session_start();
    unset($_SESSION['ACCOUNT_NAME_IN_SESSION']);
    unset($_SESSION['USER_ID_IN_SESSION']);
?>