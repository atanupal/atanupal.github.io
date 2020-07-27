<?php

// Set content-type
header('content-type: application/json');


// Get the url
$url = array_key_exists('url', $_POST) 
        ? $_POST['url'] 
        : null;


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






?>