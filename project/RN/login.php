<?php
header("Access-Control-Allow-Origin: *");
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
$role = $_REQUEST["role"];

//echo "{$username}"."<br/>";
//echo "{$password}"."<br/>";
//echo "{$role}"."<br/>";

if ($password == 1121) {
	echo "success";
} else {
	echo "fail";
}

?>