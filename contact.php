<?php
if(empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = "you@example.com";
$subject = "New Contact Form Message";
$message = "Name: $name\nEmail: $email\n\nMessage:\n$messageContent";

$headers = "From: Your Website <noreply@yourdomain.com>\r\n";
$headers .= "Reply-To: $email\r\n";

mail($to, $subject, $message, $headers);
	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);


