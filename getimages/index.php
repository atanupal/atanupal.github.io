<?php 


if ($_GET) {
    $url= $_GET['url'];
}


// Set content-type
header('content-type: application/json');


// Create image finder
include('image_finder.class.php');
$finder = new ImageFinder($url);



// Get images
$images = $finder->get_images();


// Output result
$result = array('images' => $images);
ob_start('ob_gzhandler');



$pieces = split("{\"src\":\"",json_encode($result));




$pieces2= split("\"},",str_replace("\\", "", $pieces[1]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);

echo $pieces2[0];
echo "\n";

$pieces2= split("\"},",str_replace("\\", "", $pieces[2]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";

$pieces2= split("\"},",str_replace("\\", "", $pieces[3]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";

$pieces2= split("\"},",str_replace("\\", "", $pieces[4]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);

echo $pieces2[0];
echo "\n";

$pieces2= split("\"},",str_replace("\\", "", $pieces[5]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[6]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[7]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[8]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[9]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[10]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[11]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[12]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[13]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[14]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[15]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[16]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[17]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[18]));
$pieces2[0]=str_replace("\"}]}","", $pieces2[0]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[19]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[20]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[21]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[22]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[23]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[24]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[25]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[26]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[27]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[28]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[29]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[30]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[31]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[32]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[33]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[34]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[35]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[36]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[37]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[38]));

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",str_replace("\\", "", $pieces[39]));

echo $pieces2[0];
echo "\n";







?>