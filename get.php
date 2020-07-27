<?php
define('HOST','sql109.byetcluster.com');
define('USER','a000b_7347119');
define('PASS','apapapap');
define('DB','a000b_7347119_deals');
 
$con = mysqli_connect(HOST,USER,PASS,DB);
 
$sql = "select * from deals_table";
 
$res = mysqli_query($con,$sql);
 
$result = array();
 
while($row = mysqli_fetch_array($res)){
array_push($result,
array('deal_id'=>$row[0],
'summary'=>$row[1],
'dealprice'=>$row[2]
));
}
echo "Hello World";
echo json_encode(array("result"=>$result));
 
mysqli_close($con);
?>