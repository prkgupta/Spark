<?php
//Start the session
session_start();
?>

<html>
 <head>
  <title>Spark HW3 Part 3</title>
 </head>

<body>
<?php

session_unset();
session_destroy();

header("Location:http://198.199.116.102/session2.html");

?>
</body>
</html>
