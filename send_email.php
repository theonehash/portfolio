<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $to = "saeedhashi1@outlook.com";
  $subject = "New message from $name";
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    echo "Message sent successfully.";
  } else {
    echo "Error sending the message.";
  }
}
?>
