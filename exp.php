<?php

if ($_GET) {
    $deal_id = $_GET['deal_id'];
$expired = $_GET['expired'];

	
} else {
    $deal_id = $argv[1];
	$expired = $argv[2];
}


if (is_null($deal_id))
{

} else
{


if (($expired=='1') || ($expired=='0'))
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






$sql = "
UPDATE deals.deals set comment = $expired
WHERE deal_id = $deal_id
";

if ($conn->query($sql) === TRUE) {
 echo $expired;
	
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
 $conn->close();
  mysqli_close($conn);
  
  

exit();
}
}
?>