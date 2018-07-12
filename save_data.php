<?php 
//cleaning form inputs before saving into the database
function filter_inputs($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
  
}



$fname =  $lname = $mobile = $dob = $address = "";
$fname           =   filter_inputs($_REQUEST['fname']);
$lname	         =	filter_inputs($_REQUEST['lname']);
$mobile	         =	$_REQUEST['mobile'];
$dob	         =	$_REQUEST['dob'];
$address	     =	filter_inputs($_REQUEST['address']);

//Database connection
$connect = mysqli_connect("localhost", "root", "","ekobits_task");

mysqli_select_db($connect,"ekobits_task");


 //inserting into database                                      
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