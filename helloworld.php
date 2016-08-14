<html>
 <head>
  <title>PHP Test</title>
 </head>
 <?php
  $bg = array('red', 'blue', 'white'); // array of filenames

  $i = rand(0, count($bg)-1); // generate random number size of the array
  $selectedBg = "$bg[$i]"; // set variable equal to which random color was chosen
?>
 <body style="background:<?php echo $selectedBg; ?>">
 <?php echo '<h1>Hello Web World from PHP on' . date("Y/m/d") .' '. date("h:i:sa") . '</h1>'; ?> 
 </body>
</html>