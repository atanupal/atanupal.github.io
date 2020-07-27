<?php

if ($_GET) {
    $summary = $_GET['summary'];
	$description = $_GET['description'];
    $dealprice = $_GET['dealprice'];
$maxprice = $_GET['maxprice'];
$link = $_GET['link'];
$picturelink = $_GET['picturelink'];
$uploadname = $_GET['uploadname'];
$uploademail = $_GET['uploademail'];
$temp = $_GET['temp'];
	
} else {
    $summary = $argv[1];
	$description = $argv[2];
    $dealprice = $argv[3];
$maxprice = $argv[4];
$link = $argv[5];
$picturelink = $argv[6];
$uploadname=$argv[7];
$uploademail=$argv[8];	
$temp=$argv[9];
}
if (is_null($summary))
{
$summary ='0';
}else
{
	$arr11 = split(" )}] ", $summary);
	$summary = join("&",$arr11); 
	
	
	$arr12 = split(" }]) ", $summary);
	$summary = join("#",$arr12); 
	
	
	$arr13 = split(" ])} ", $summary);
	$summary = join(" &*( ",$arr13); 
	
	



if (is_null($description))
{
$description = '0';
}else
{
	$arr21 = split(" )}] ", $description);
	$description = join("&",$arr21); 
	
	
	$arr22 = split(" }]) ", $description);
	$description = join("#",$arr22); 
	
	
	$arr23 = split(" ])} ", $description);
	$description = join(" &*( ",$arr23);  
	
	$arr24 = split("]]]]", $description);
	$description = join("#",$arr24);  
	
}


if (is_null($dealprice))
{
$dealprice = '0';
}else
{
	$arr31 = split(" )}] ", $dealprice);
	$dealprice = join("&",$arr31); 
	
	
	$arr32 = split(" }]) ", $dealprice);
	$dealprice = join("#",$arr32); 
	
	
	$arr33 = split(" ])} ", $dealprice);
	$dealprice = join(" &*( ",$arr33); 
	
}


if (is_null($maxprice))
{
$maxprice = '0';
}else
{
	$arr41 = split(" )}] ", $maxprice);
	$maxprice = join("&",$arr41); 
	
	
	$arr42 = split(" }]) ", $maxprice);
	$maxprice = join("#",$arr42); 
	
	
	$arr43 = split(" ])} ", $maxprice);
	$maxprice = join(" &*( ",$arr43); 
	
}



if (is_null($link))
{
$link = '0';
}else
{
	$arr51 = split(" )}] ", $link);
	$link = join("&",$arr51); 
	
	
	$arr52 = split(" }]) ", $link);
	$link = join("#",$arr52); 
	
	
	$arr53 = split(" ])} ", $link);
	$link = join(" &*( ",$arr53); 
	
}


if (is_null($picturelink))
{
$picturelink = '0';
}else
{
	$arr61 = split(" )}] ", $picturelink);
	$picturelink = join("&",$arr61); 
	
	
	$arr62 = split(" }]) ", $picturelink);
	$picturelink = join("#",$arr62); 
	
	
	$arr63 = split(" ])} ", $picturelink);
	$picturelink = join(" &*( ",$arr63); 
	
}
if (is_null($uploadname))
{
$uploadname = '0';
}else
{
	$arr71 = split(" )}] ", $uploadname);
	$uploadname = join("&",$arr71); 
	
	
	$arr72 = split(" }]) ", $uploadname);
	$uploadname = join("#",$arr72); 
	
	
	$arr73 = split(" ])} ", $uploadname);
	$uploadname = join(" &*( ",$arr73); 
}
if (is_null($uploademail))
{
$uploademail = '0';
}else
{
	$arr81 = split(" )}] ", $uploademail);
	$uploademail = join("&",$arr81); 
	
	
	$arr82 = split(" }]) ", $uploademail);
	$uploademail = join("#",$arr82); 
	
	
	$arr83 = split(" ])} ", $uploademail);
	$uploademail = join(" &*( ",$arr83); 
}

if (is_null($temp))
{
$temp = '0';
}else
{
	$arr91 = split(" )}] ", $temp);
	$temp = join("&",$arr91); 
	
	
	$arr92 = split(" }]) ", $temp);
	$temp = join("#",$arr92); 
	
	
	$arr93 = split(" ])} ", $temp);
	$temp = join(" &*( ",$arr93); 
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
INSERT INTO deals.dealsall (summary,description,dealprice,maxprice,link,picturelink,uploadname,uploademail,temp) VALUES ($summary,$description,$dealprice,$maxprice,$link,$picturelink,$uploadname,$uploademail,$temp)
";


 if ($conn->query($sql) === TRUE) {
    echo " New record uploaded to \"Dealsall Table\" successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
 
mysqli_close($conn);
exit();

}
?>