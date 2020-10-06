<?php
	
	session_start();

?>

<!DOCTYPE html>
<html>
<head>
		<meta charset="utf-8">
	<link rel="stylesheet" href="style4.1.css">
	<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap" rel="stylesheet">
</head>
<body>
	<div form class="box">
	<img class ="logo" src="logo.png"></a>
	<br>
	<h1>Hello!</h1>
	<h2><?php echo $_SESSION['FirstName']; echo " "; echo $_SESSION['LastName']; ?></h2>
	<h3>Your email is: <br></h3>
	<h2><?php echo $_SESSION['E-mail'];?></h2>
</div>
</body>
</html>