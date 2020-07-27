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






$sql = "
UPDATE deals.deals set minus = minus + 1 
WHERE deal_id = $deal_id
";

if ($conn->query($sql) === TRUE) {
    
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
 

$conn->close();
 
mysqli_close($conn);


 // Create connection
$conn2 = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn2->connect_error) {
   die("Connection failed: " . $conn2->connect_error);
}
 

 
$sql2 = "
SELECT minus from deals
WHERE deal_id = $deal_id
";

$restemp = mysqli_query($conn2,$sql2);
 



while ($row=mysqli_fetch_row($restemp))
    {
    $count=$row[0];
    }

echo $count;


$conn2->close();

mysqli_close($conn2);









exit();

}
?>