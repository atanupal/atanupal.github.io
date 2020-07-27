        <?php
		   require 'mail/phpmailer/PHPMailerAutoload.php';
        if ($_GET) {
			$toid = $_GET('toid');	
    $summary = $_GET['summary'];
	$description = $_GET['description'];
    $dealprice = $_GET['dealprice'];
$maxprice = $_GET['maxprice'];
$link = $_GET['link'];
$picturelink = $_GET['picturelink'];
$uploadname = $_GET['uploadname'];
$uploademail = $_GET['uploademail'];
	
} else {
	$toid = $argv[1];
    $summary = $argv[2];
	$description = $argv[3];
    $dealprice = $argv[4];
$maxprice = $argv[5];
$link = $argv[6];
$picturelink = $argv[7];
$uploadname=$argv[8];
$uploademail=$argv[9];	
}
             
              

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

                    $mail->addAddress($toid);

                    $mail->Subject = "Deal uploaded successfully for approval.";

                    $mail->msgHTML("Thanks for uploading the deal.... It has been uploaded for approival.... Once approved, you will be intimated by mail.");

                    if (!$mail->send()) {
                       $error = "Mailer Error: " . $mail->ErrorInfo;
                        ?><script>alert('<?php echo $error ?>');</script><?php
                    } 
                    else {
                       echo '<script>alert("Message sent!");</script>';
                    }
               }
        ?>
 
