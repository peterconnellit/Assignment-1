<!DOCTYPE php>
<html>
<head>
    <link rel="stylesheet" href="src/styles.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/1f2f29a838.js" crossorigin="anonymous"></script>
    <title>Feedback Form</title>
    <meta charset="UTF-8" />
</head>

<body>

    <!--Navigation-->
      <section class="hero">
          <nav>
              <img class="logo" src="src/images/logo.png" alt="Peter Connell's logo"/>
              <ul id="nav-list">
                  <li><a href="index.html">Home</a></li>
              </ul>
              <button class="hamburger" id="hamburger">
                  <i class="fas fa-bars"></i>
              </button>
          </nav>
      
    <!--Scripts-->
    <script src="src/app.js"></script>
  </body>
</html>

<?php

#Receive user input
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

#Formatting
$email_from = $visitor_email;
$email_subject = "New Form submission from Portfolio Site";
$email_body = "You have received a new message from the user $name at $email_from.\n".
                          "Here is the message:\n $message.\n".

#Post
$to = "peterconnellmusic@hotmail.co.uk";
$headers = "From: $to"  .  "\r\n";
$headers .= "Reply-To: " . $email_from . "\r\n";
$sent = mail($to,$email_subject,$email_body,$headers);

#Injection filters
function filter_email_header($form_field) {  
    return preg_replace('~/[nr|!/<>^$%*&]+/~','',$form_field);
    }

    $visitor_email  = filter_email_header($visitor_email);

function IsInjected($str)
    {
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
        
        if(preg_match($inject,$str))
        {
          return true;
        }
        else
        {
          return false;
        }
    }
    
    if(IsInjected($visitor_email))
    {
        echo "Bad email value!";
        exit;
    }

#Thank user or notify them of a problem
if ($sent) {

?>
<html>
    <head>
        <title>Thank You</title>
    </head>

    <body>
        <div class="hero-area">
            <div class="hero-text">
                <h1>Thank You</h1>
                <p>Thank you for your feedback.</p>
            </div>
        </div>
    </body>

</html>
<?php

} else {
?>
<html>
    <head>
        <title>Something went wrong</title>
    </head>

    <body>
        <div class="hero-area">
            <div class="hero-text">
                <h1>Something went wrong</h1>
                <p>We could not send your feedback. Please try again.</p>
            </div>
        </div>
    </body>

</html>
<?php
}

?>