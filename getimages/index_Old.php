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





?>