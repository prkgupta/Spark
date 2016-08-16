<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Environment Variables in PHP</title>
</head>
<body >

<h1>Printing all the environment variables from PHP</h1>

<?php
phpinfo(INFO_ENVIRONMENT);
echo 'My path is adasd ' .$_ENV["PATH"] . '!';
?>

<?php var_dump($_ENV) ?>

</body>
</html>

