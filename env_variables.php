<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Environment Variables in PHP</title>
</head>
<body >

<h1>Printing all the environment variables from PHP</h1>

<?php
echo 'My username is ' .$_ENV["USER"] . '!';
?>

<?php var_dump($_ENV) ?>

</body>
</html>

