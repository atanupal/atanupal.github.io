<?php

if ($_GET) {
    $from= $_GET['argument1'];
    $strd = $_GET['strd'];
	$type = $_GET['type'];
	
} else {
    $from = $argv[1];
    $strd = $argv[2];
	$type = $argv[3];
}


if (is_null($from))

{
$from = 0;
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
$sqltemp = "select count(*) from deals";



$restemp = mysqli_query($conn,$sqltemp);
 



$str = explode(" ", $strd);



while ($row=mysqli_fetch_row($restemp))
    {
    $count=$row[0];
    }
	
	
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



$sql = "select * from deals

where 

$stri

order by deal_id desc limit $from,4

";


 
$res = mysqli_query($conn,$sql);
 

$result = array();


while ($row=mysqli_fetch_row($res))
    {
		$deal_id=preg_replace('/\s+/', '([{', $row[0]);
$summary = preg_replace('/\s+/', '([{', $row[1]);
$description = preg_replace('/\s+/', '([{', $row[2]);
$dealprice = preg_replace('/\s+/', '([{', $row[3]);
$maxprice = preg_replace('/\s+/', '([{', $row[4]);
$comment=preg_replace('/\s+/', '([{', $row[5]);
$link = preg_replace('/\s+/', ' ([{ ', $row[6]);
$picturelink = preg_replace('/\s+/', '([{', $row[7]);
$plus = preg_replace('/\s+/', '([{', $row[8]);
$minus = preg_replace('/\s+/', '([{', $row[9]);
$postedby = preg_replace('/\s+/', '([{', $row[10]);
$expired = preg_replace('/\s+/', '([{', $row[11]);

    printf (" %s %s %s %s %s %s %s %s %s %s %s %s ",$deal_id,$summary,$description,$dealprice,$maxprice,$comment,$link,$picturelink,$plus, $minus, $postedby, $expired);
    
    }


while($row = mysqli_fetch_array($res)){
array_push($result,
array('deal_id'=>$row[0],
'summary'=>$row[1],
'description'=>$row[2],
'dealprice'=>$row[3],
'maxprice'=>$row[4],
'comment'=>$row[5],
'link'=>$row[6],
'picturelink'=>$row[7],
'plus'=>$row[8],
'minus'=>$row[9],
'postedby'=>$row[10],
'expired'=>$row[11]
));
echo json_encode(array("result"=>$result));

}

 
mysqli_close($conn);
exit();
?>