<?php
$servername   = "sql109.000a.biz";
$database = "a000b_7347119_deals";
$username = "a000b_7347119";
$password = "apapapap";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}
  echo "Connected successfully";

$sql = "select * from deals_table";
 
$res = mysqli_query($conn,$sql);
 

$result = array();

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

?>