<?php

if ($_GET) {
    $from= $_GET['argument1'];
    $argument2 = $_GET['argument2'];
	
} else {
    $from = $argv[1];
    $argument2 = $argv[2];
	
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
 



while ($row=mysqli_fetch_row($restemp))
    {
    $count=$row[0];
    }



$sql = "select * from deals
order by deal_id desc limit $from,4

";


 
$res = mysqli_query($conn,$sql);
 

$result = array();


while ($row=mysqli_fetch_row($res))
    {
		$deal_id=preg_replace('/\s+/', '([{', $row[0]);
$summary = preg_replace('/\s+/', '([{', $row[1]);
$dealprice = preg_replace('/\s+/', '([{', $row[2]);
$maxprice = preg_replace('/\s+/', '([{', $row[3]);
$link = preg_replace('/\s+/', '([{', $row[4]);

    printf (" %s %s %s %s %s ",$deal_id,$summary,$dealprice,$maxprice,$link);
    
    }


while($row = mysqli_fetch_array($res)){
array_push($result,
array('deal_id'=>$row[0],
'summary'=>$row[1],
'dealprice'=>$row[2],
'maxprice'=>$row[3],
'link'=>$row[4]
));
echo json_encode(array("result"=>$result));

}

 
mysqli_close($conn);
exit();
?>