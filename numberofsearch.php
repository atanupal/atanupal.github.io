<?php

if ($_GET) {
    $strd = $_GET['strd'];
	$type = $_GET['type'];
	
} else {
    $strd = $argv[2];
	$type = $argv[3];
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


$str = explode(" ", $strd);
if ($type=="all")
		
		{
	
	$stri="(";
	$count=0;
foreach($str as $str_part)
{
	
	if ($count==0)
	{
		$stri= $stri . "summary like '%$str_part%'";
		
	}
	else
	{
	$stri = $stri . " and summary like '%$str_part%'";
	
	}
$count=$count + 1;
}
$stri=$stri . ") OR ";
	
	$count=0;
	$stri=$stri . "(";
	
foreach($str as $str_part)
{
	
	if ($count==0)
	{
		$stri= $stri . "description like '%$str_part%'";
		
	}
	else
	{
	$stri = $stri . " and description like '%$str_part%'";
	
	}
$count=$count + 1;
}



$stri=$stri . ") OR ";
	
	$count=0;
	$stri=$stri . "(";
	
foreach($str as $str_part)
{
	
	if ($count==0)
	{
		$stri= $stri . "dealprice like '%$str_part%'";
		
	}
	else
	{
	$stri = $stri . " and dealprice like '%$str_part%'";
	
	}
$count=$count + 1;
}

$stri=$stri . ") OR ";
	
	$count=0;
	$stri=$stri . "(";
	
foreach($str as $str_part)
{
	
	if ($count==0)
	{
		$stri= $stri . "maxprice like '%$str_part%'";
		
	}
	else
	{
	$stri = $stri . " and maxprice like '%$str_part%'";
	
	}
$count=$count + 1;
}

$stri=$stri . ") OR ";
	
	$count=0;
	$stri=$stri . "(";
	
foreach($str as $str_part)
{
	
	if ($count==0)
	{
		$stri= $stri . "postedby like '%$str_part%'";
		
	}
	else
	{
	$stri = $stri . " and postedby like '%$str_part%'";
	
	}
$count=$count + 1;
}


$stri=$stri . ") OR ";
	
	$count=0;
	$stri=$stri . "(";
	

	
foreach($str as $str_part)
{
	
	if ($count==0)
	{
		$stri= $stri . "expired like '%$str_part%'";
		
	}
	else
	{
	$stri = $stri . " and expired like '%$str_part%'";
	
	}
$count=$count + 1;
}

$stri=$stri . ") OR ";
	
	$count=0;
	$stri=$stri . "(";
	
foreach($str as $str_part)
{
	
	if ($count==0)
	{
		$stri= $stri . "deal_id like '%$str_part%'";
		
	}
	else
	{
	$stri = $stri . " and deal_id like '%$str_part%'";
	
	}
$count=$count + 1;
}



$stri=$stri . ") OR ";
	
	$count=0;
	$stri=$stri . "(";

foreach($str as $str_part)
{
	
	if ($count==0)
	{
		$stri= $stri . "link like '%$str_part%'";
		
	}
	else
	{
	$stri = $stri . " and link like '%$str_part%'";
	
	}
$count=$count + 1;
}
$stri=$stri . ")";


		}
		else{

$stri="";
	$count=0;
foreach($str as $str_part)
{
	
	if ($count==0)
	{
		$stri= "$type like '%$str_part%'";
		
	}
	else
	{
	$stri = $stri . " and $type like '%$str_part%'";
	
	}
$count=$count + 1;
}


		}




$sql = "select count(*) from deals

where 

$stri

";

 
$res = mysqli_query($conn,$sql);
 

$result = array();


while ($row=mysqli_fetch_row($res))
    {
    printf ("%s",$row[0]);
    }






 
mysqli_close($conn);
exit();
?>