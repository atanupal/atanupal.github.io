<?php
		    
		   
if ($_GET) {
			$username = $_GET['username'];	
    $password = $_GET['password'];
	
	
} else {
	$username = $argv[1];
    $password = $argv[2];

}
       
if ($username=="atanupal" && $password == "apapapap@123A")
{
echo "Login successful";

}
else
{
	echo "Login failed";
}
	
		  
        ?>
 
