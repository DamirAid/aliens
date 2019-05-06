<?php
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
  $name = $_POST['name'];
  $mail = $_POST['mail'];
  $text = $_POST['text'];

  $name = htmlspecialchars($name);
  $mail = htmlspecialchars($mail);
  $text = htmlspecialchars($text);

  $name = urldecode($name);
  $mail = urldecode($mail);
  $text = urldecode($text);

  $name = trim($name);
  $mail = trim($mail);
  $text = trim($text);

  if (mail("valen.web.studio@gmail.com", "AlienVDS", 
  "Имя: $name. \nE-mail: $mail. \nСообщение: $text.",
  "From: valen.web.studio@gmail.com \r\n"))
  {
    echo header("Location: ../index.html");
  } else { 
      echo "при отправке сообщения возникли ошибки";
  }
?>