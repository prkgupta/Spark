<?php
session_start();
?>

<html>
 <head>
  <title>Spark HW3 Part 4</title>
 </head>

 <body>
 
 <?php if( $_SESSION["fname"] == "" ){  ?>
<h1>Howdy stranger...tell me your name on page1!</h1>

 <?php } else{ ?>
  <h1>Hi <?php echo $_SESSION["fname"]; ?> <?php echo $_SESSION["lname"]; ?> nice to meet you!  

  </h1>
  <?php } ?>

</body>
</html>
