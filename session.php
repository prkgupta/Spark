<?php
session_start();
?>
<html>
 <head>
  <title>Spark HW3 Part 3</title>
 </head>
<body>
<?php

$_SESSION["fname"] = $_POST['fname'];
$_SESSION["lname"] = $_POST['lname'];

header("Location:http://198.199.116.102/session2.html");

?>

</body>
</html>
