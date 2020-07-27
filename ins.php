<?php

if ($_GET) {
    $summary = $_GET['summary'];
	$description = $_GET['description'];
    $dealprice = $_GET['dealprice'];
$maxprice = $_GET['maxprice'];
$link = $_GET['link'];
$picturelink = $_GET['picturelink'];
	
} else {
    $summary = $argv[1];
	$description = $argv[2];
    $dealprice = $argv[3];
$maxprice = $argv[4];
$link = $argv[5];
$picturelink = $argv[6];
	
}


if (is_null($summary))

{

} else
{
$arr1 = split(")}]", $summary);
	
	
	$summary = join("&",$arr1); 

if (is_null($description))
{
$description = '0';
}else
{
	$arr2 = split(")}]", $description);
	
	
	$description = join("&",$arr2); 
	
}
if (is_null($dealprice))
{
$dealprice = '0';
}else
{
	$arr3 = split(")}]", $dealprice);
	
	
	$dealprice = join("&",$arr3); 
	
}

if (is_null($maxprice))
{
$maxprice = '0';
}else
{
	$arr4 = split(")}]", $maxprice);
	
	
	$maxprice = join("&",$arr4); 
	
}

if (is_null($link))
{
$link = '0';
}else
{
	$arr5 = split(")}]", $link);
	
	
	$link = join("&",$arr5); 
	
}

if (is_null($picturelink))
{
$picturelink = '0';
}else
{
	$arr6 = split(")}]", $picturelink);
	
	
	$picturelink = join("&",$arr6); 
	
}



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
INSERT INTO deals.deals (summary,description,dealprice,maxprice,link,picturelink) VALUES ($summary,$description,$dealprice,$maxprice,$link,$picturelink)
";


 if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
 
mysqli_close($conn);
exit();

}
?>