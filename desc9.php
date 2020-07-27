<?php

if ($_GET) {
    $temp = $_GET['temp'];
	$desc = $_GET['description'];
   
	
} else {
    $temp = $argv[1];
	$desc = $argv[2];
}


if ($temp)
{







$servername   = "mysql5.gear.host";
$database = "deals";
$username = "deals";
$password = "Uf08!_0R86Id";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}
  echo "Connected successfully";





$sql = "
UPDATE deals.dealsall set desc9 = $desc
WHERE temp = $temp
";

if ($conn->query($sql) === TRUE) {
    echo "Record with deal_id  " . $deal_id . " updated";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
 

$conn->close();
 
mysqli_close($conn);
exit();

}
?>