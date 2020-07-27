<?php

if ($_GET) {
    $deal_id = $_GET['deal_id'];
   
	
} else {
    $deal_id = $argv[1];
	
}


if (is_null($deal_id))
{

} else
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
DELETE FROM deals.deals WHERE deal_id = $deal_id
";

if ($conn->query($sql) === TRUE) {
    echo "Record with deal_id  " . $deal_id . "deleted";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
 

$conn->close();
 
mysqli_close($conn);
exit();

}
?>