<?php

if ($_GET) {
    $deal_id = $_GET['deal_id'];
	$summary = $_GET['summary'];
	$description = $_GET['description'];
    $dealprice = $_GET['dealprice'];
	$maxprice = $_GET['maxprice'];
	$link = $_GET['link'];
	$picturelink = $_GET['picturelink']; 
	$postedby = $_GET['postedby']; 
	
} else {
    $deal_id = $argv[1];
	$summary = $argv[2];
	$description = $argv[3];
	$dealprice = $argv[4];
	$maxprice = $argv[5];
	$link = $argv[6];
	$picturelink = $argv[7];
	$postedby = $argv[8];
	
}


if ($deal_id)
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
UPDATE deals.deals set summary = $summary, description = $description, dealprice= $dealprice, maxprice=$maxprice, link=$link, picturelink=$picturelink, postedby = $postedby
WHERE deal_id = $deal_id
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