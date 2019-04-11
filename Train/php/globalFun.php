<?php
    header("Content-Type:text/html;charset=UTF-8");
    function getBirthDay($data)
    {
        $tyear=intval(substr($data,6,4)); 
        $tmonth=intval(substr($data,10,2)); 
        $tday=intval(substr($data,12,2));
        return $tyear."-".$tmonth."-".$tday;
    }
    function getSex($data)
    {
        return intval(substr($data,16,1))%2;
    }
    function getCountry($data)
    {
        return intval(substr($data,2,2));
    }
?>
