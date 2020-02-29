<?php

$webmaster_email = "noah.mistry@gmail.com";

$contact_page = "/contact.html";

$thankyou_page = "./thank-you.html";

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$msg = 
"Name: " . $name . "\r\n" . 
"Email: " . $email . "\r\n" . 
"Subject:" .$subject . "\r\n" .
"Message: " . $message ;

/*
The following function checks for email injection.
Specifically, it checks for carriage returns - typically used by spammers to inject a CC list.
*/
function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}

// If the user tries to access this script directly, redirect them to the feedback form,
if (!isset($_REQUEST['email'])) {
    header( "Location: $contact_page" );
    }

// If we passed all previous tests, send the email then redirect to the thank you page.
else {

	mail( "$webmaster_email", "Contact Form Results", $msg );

	header( "Location: $thankyou_page" );
}


?>