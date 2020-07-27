<?php
		    
		   
if ($_GET) {
			$to_id = $_GET['to_id'];	
    $summary = $_GET['summary'];
	$description = $_GET['description'];
    $dealprice = $_GET['dealprice'];
$maxprice = $_GET['maxprice'];
$link = $_GET['link'];
$picturelink = $_GET['picturelink'];
$uploadname = $_GET['uploadname'];
$uploademail = $_GET['uploademail'];
	
} else {
	$to_id = $argv[1];
    $summary = $argv[2];
	$description = $argv[3];
    $dealprice = $argv[4];
$maxprice = $argv[5];
$link = $argv[6];
$picturelink = $argv[7];
$uploadname=$argv[8];
$uploademail=$argv[9];	
}
       
if ($to_id==$uploademail)
{
	
	$arr11 = split(" )}] ", $summary);
	$summary = join("&",$arr11); 
	
	
	$arr12 = split(" }]) ", $summary);
	$summary = join("#",$arr12); 
	
	
	$arr13 = split(" ])} ", $summary);
	$summary = join('"',$arr13); 
	
	 $arr14 = split(")}]", $summary);
	$summary = join("&",$arr14); 
	
	$arr21 = split(" )}] ", $description);
	$description = join("&",$arr21); 
	
	
	$arr22 = split(" }]) ", $description);
	$description = join("#",$arr22); 
	
	
	$arr23 = split(" ])} ", $description);
	$description = join('"',$arr23);  
	
	
	$arr24 = split(")}]", $description);
	$description = join("&",$arr24); 
	
	
	$arr25 = split("]]]]", $description);
	$description = join("#",$arr25); 
	
	
	
	
		$arr31 = split(" )}] ", $dealprice);
	$dealprice = join("&",$arr31); 
	
	
	$arr32 = split(" }]) ", $dealprice);
	$dealprice = join("#",$arr32); 
	
	
	$arr33 = split(" ])} ", $dealprice);
	$dealprice = join('"',$arr33); 
	
	$arr34 = split(")}]", $dealprice);
	$dealprice = join("&",$arr34); 
	
	
	$arr41 = split(" )}] ", $maxprice);
	$maxprice = join("&",$arr41); 
	
	
	$arr42 = split(" }]) ", $maxprice);
	$maxprice = join("#",$arr42); 
	
	
	$arr43 = split(" ])} ", $maxprice);
	$maxprice = join('"',$arr43); 
	
	$arr44 = split(")}]", $maxprice);
	$maxprice = join("&",$arr44); 
	
	$arr51 = split(" )}] ", $link);
	$link = join("&",$arr51); 
	
	
	$arr52 = split(" }]) ", $link);
	$link = join("#",$arr52); 
	
	
	$arr53 = split(" ])} ", $link);
	$link = join('"',$arr53); 
	
	$arr54 = split(")}]", $link);
	$link = join("&",$arr54); 
	
		$arr61 = split(" )}] ", $picturelink);
	$picturelink = join("&",$arr61); 
	
	
	$arr62 = split(" }]) ", $picturelink);
	$picturelink = join("#",$arr62); 
	
	
	$arr63 = split(" ])} ", $picturelink);
	$picturelink = join('"',$arr63); 
	
	$arr64 = split(")}]", $picturelink);
	$picturelink = join("&",$arr64); 
	
	
	
	$arr71 = split(" )}] ", $uploadname);
	$uploadname = join("&",$arr71); 
	
	
	$arr72 = split(" }]) ", $uploadname);
	$uploadname = join("#",$arr72); 
	
	
	$arr73 = split(" ])} ", $uploadname);
	$uploadname = join('"',$arr73); 
	
	$arr74 = split(")}]", $uploadname);
	$uploadname = join("&",$arr74); 
	
	
$arr81 = split(" )}] ", $uploademail);
	$uploademail = join("&",$arr81); 
	
	
	$arr82 = split(" }]) ", $uploademail);
	$uploademail = join("#",$arr82); 
	
	
	$arr83 = split(" ])} ", $uploademail);
	$uploademail = join('"',$arr83); 
	
	$arr84 = split(")}]", $uploademail);
	$uploademail = join("&",$arr84); 
	   
	 $arr91 = split(" )}] ", $to_id);
	$to_id = join("&",$arr91); 
	
	
	$arr92 = split(" }]) ", $to_id);
	$to_id = join("#",$arr92); 
	
	
	$arr93 = split(" ])} ", $to_id);
	$to_id = join('"',$arr93);  
	
	$arr94 = split(")}]", $to_id);
	$to_id = join("&",$arr94); 
	   
        require 'mail/phpmailer/PHPMailerAutoload.php';
			  

                    $mail = new PHPMailer;

                    $mail->isSMTP();

                    $mail->Host = 'smtp.gmail.com';

                    $mail->Port = 465;

                    $mail->SMTPSecure = 'ssl';

                    $mail->SMTPAuth = true;

                    $mail->Username = "atanupal@gmail.com";

                    $mail->Password = "papapapa@123A";

                    $mail->setFrom('atanupal@gmail.com', 'Atanu Pal');

                    $mail->addReplyTo('atanupal@gmail.com', 'Atanu Pal');

                    $mail->addAddress($to_id);

                    $mail->Subject = "Your Deal has been approved !!!" ;

                    $mail->msgHTML("<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>Hi $uploadname , </h1>
<h2> This is to inform you that your deal has been approved with the following details </h2>
<h2> Details</h2>
<h3> Summary: $summary</h3>
<h3> Description: $description</h3>
<h3> Dealprice: $dealprice</h3>
<h3> Maxprice: $maxprice</h3>
<h3> Link: $link</h3>
<p><img src=$picturelink style='width:128px;height:128px;' ></p>
<h3> Upload more Deals @ http://atanupal.gearhostpreview.com/uploaddealall.html </h3>


</body>
</html>");

                    if (!$mail->send()) {
                       $error = "Mailer Error: " . $mail->ErrorInfo;
                        echo $error;
                    } 
                    else {
                       echo "Success";
                    }
          



}
		  
        ?>
 
