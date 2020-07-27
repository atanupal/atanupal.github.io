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
       
if ($summary)
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

                    $mail->addAddress('atanupal@gmail.com', 'Atanu Pal');
					$mail->AddBCC('atanu.pal@nagarro.com', 'Atanu Pal');
					$mail->AddBCC('atanupal@gmail.com', 'Atanu Pal');
					$mail->AddBCC('anuj.verma@nagarro.com', 'Anuj Verma');
					$mail->AddBCC('gagan.kumar@nagarro.com', 'Gagan Kumar');
					$mail->AddBCC('madangaurav89@gmail.com', 'Gaurav Madaan');
					$mail->AddBCC('bharti03.jyoti@gmail.com', 'Jyoti Bharti');
					$mail->AddBCC('manishkumar003@gmail.com', 'Manish Kumar');
					$mail->AddBCC('mishupy.ghosh@gmail.com', 'Mishupy Ghosh');
					$mail->AddBCC('mohammad.nadeem85@gmail.com', 'Mohd. Nadeem');
					$mail->AddBCC('nkalia@sapient.com', 'Natasha Kalia');
					$mail->AddBCC('neeraj.sehgal@gmail.com', 'Neeraj Sehgal');
					$mail->AddBCC('neha.marwaha@gmail.com', 'Neha Marwaha');
					$mail->AddBCC('nishikant.harjai@gmail.com', 'Nishikant Harjai');
					$mail->AddBCC('psingh492@sapient.com', 'Pallavi Singh');
					$mail->AddBCC('parthvatsa@gmail.com', 'Parth Vatsa');
					$mail->AddBCC('priyanka.gupta06@gmail.com', 'Priyanka Gupta');
					$mail->AddBCC('rahul.sethi30@gmail.com', 'Rahul Sethi');
					$mail->AddBCC('rgupta197@gmail.com', 'Raju Gupta');
					$mail->AddBCC('raman.montylee@gmail.com', 'Raman Montylee');
					$mail->AddBCC('ravisagar@gmail.com', 'Ravi Sagar');
					$mail->AddBCC('rohitjain0405@gmail.com', 'Rohit Jain');
					$mail->AddBCC('sangeetad2006@gmail.com', 'Sangeeta');
					$mail->AddBCC('agarwal.sanket84@gmail.com', 'Sanket Agarwal');
					$mail->AddBCC('sarvesh.rajat@gmail.com', 'Sarvesh Jaiswal');
					$mail->AddBCC('shashank.in3@gmail.com', 'Shashank');
					$mail->AddBCC('shivinder.narr@gmail.com', 'Shivinder Narr');
					$mail->AddBCC('shveta.vij@gmail.com', 'Shveta Vij');
					$mail->AddBCC('sonali.saxena27@gmail.com', 'Sonali Saxena');
					$mail->AddBCC('arora.vanita@nagarro.com', 'Vanita Arora');
					$mail->AddBCC('vipin.khari@nagarro.com', 'Vipin Khari');
					$mail->AddBCC('viveck.kr@gmail.com', 'Vivek Kumar');
					$mail->AddBCC('yogeshhindustani@gmail.com', 'Yogesh Sharma');
					$mail->AddBCC('lakshay.wadhwa@newgen.co.in', 'Lakshay Wadhwa');
					$mail->AddBCC('wason.786@gmail.com', 'Bhupinder');
					$mail->AddBCC('aadil.khan@nagarro.com', 'Aadil');
					
                    $mail->Subject = $summary;

                    $mail->msgHTML("<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>Hi All, </h1>
<h2> New Deal : $summary </h2>
<h2> Details</h2>
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
 
