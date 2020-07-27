<?php
$servername   = "sql109.000a.biz";
$database = "a000b_7347119_deals3";
$username = "a000b_7347119";
$password = "apapapap";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}
  echo "Connected successfully";
$sqltemp = "select count(deal_id) from deals_table";

$restemp = mysqli_query($conn,$sqltemp);
$restemparray= mysqli_fetch_array($restemp);
$from = $restemparray[0]-4;
$sql = "select * from deals_table
order by deal_id asc limit $from,4
";


 
$res = mysqli_query($conn,$sql);
 

$result = array();


while ($row=mysqli_fetch_row($res))
    {
    printf ("\n %s %s %s %s \n",$row[0],$row[1],$row[2],$row[3]);
    printf("\n");
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