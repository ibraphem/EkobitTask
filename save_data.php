<?php 
//ini_set("sendmail_from", "careertech@boldlinks.com.ng");
define('MYSQL_BOTH',MYSQLI_BOTH);
define('MYSQL_NUM',MYSQLI_NUM);
define('MYSQL_ASSOC',MYSQLI_ASSOC);
//ini_set("display_errors",1);
//error_reporting(-1);
function filter_inputs($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
  
}

//$_REQUEST['course_period'] = "";
$fname =  $lname = $mobile = $dob = $address = ""; //print_r($_REQUEST);die();
$fname           =   filter_inputs($_REQUEST['fname']);
$lname	         =	filter_inputs($_REQUEST['lname']);
$mobile	         =	$_REQUEST['mobile'];
$dob	         =	$_REQUEST['dob'];
$address	     =	filter_inputs($_REQUEST['address']);


$connect = mysqli_connect("localhost", "root", "","ekobits_task");
//$conect = mysqli_connect("localhost:3306", "Boldlinks_win", "Consistency@2016","Boldlinks_Win_careertechdb");
mysqli_select_db($connect,"ekobits_task");


                                       
$insert_sql = "INSERT INTO ekobits_table(firstname,lastname,dob,phone,address)
                        VALUES('$fname','$lname','$dob','$mobile','$address')";
//echo "insert qry = ".$insert_sql;die();
$sql = mysqli_query($connect,$insert_sql);
if($sql){ 
echo "Your data was saved succesfully.";
} else {
    echo "There is a problem saving your data into the database.";
    }
?>