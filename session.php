<html>
 <head>
  <title>Spark HW3 Part 3</title>
 </head>

 <body style="background:<?php echo $_POST["color"]; ?>">
 

 <?php if( $_POST["fname"] == "" ){?>
<h1>wut</h1>

 <?php } else ?>
  <h1>Hello <?php echo $_POST["fname"]; ?> <?php echo $_POST["lname"]; ?> from a Web app written in PHP on <?php echo date("Y/m/d"); ?> at <?php echo date("h:i:sa"); ?>  

  </h1>
  <?php } ?>

</body>
</html>
