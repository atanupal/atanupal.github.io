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


$pieces2= split("\"},",$pieces[1]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[2]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[3]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[4]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[5]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[6]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[7]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[8]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[9]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[10]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[11]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[12]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[13]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[14]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[15]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[16]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[17]);
echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[18]);
echo $pieces2[0];
echo "\n";

$pieces2= split("\"},",$pieces[19]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[20]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[21]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[22]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[23]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[24]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[25]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[26]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[27]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[28]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[29]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[30]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[31]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[32]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[33]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[34]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[35]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[36]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[37]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[38]);

echo $pieces2[0];
echo "\n";
$pieces2= split("\"},",$pieces[39]);

echo $pieces2[0];
echo "\n";









?>