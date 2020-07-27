<?php

if ($_GET) {
    $temp = $_GET['temp'];
	
   
	
} else {
    $temp = $argv[1];
	
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
UPDATE deals.dealsall set description = concat(IFNULL(desc1,''),IFNULL(desc2,''), IFNULL(desc3,''), 
IFNULL(desc4,''), IFNULL(desc5,''), IFNULL(desc6,''), IFNULL(desc7,''),IFNULL(desc8,''),
IFNULL(desc9,''),IFNULL(desc10,''),IFNULL(desc11,''),IFNULL(desc12,''),IFNULL(desc13,''),
IFNULL(desc14,''),IFNULL(desc15,''),IFNULL(desc16,''))
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