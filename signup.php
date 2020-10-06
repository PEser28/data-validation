<?php

	session_start();
	$_SESSION['FirstName'] = $_POST['fName'];
	$_SESSION['LastName'] = $_POST['lName'];
	$_SESSION['E-mail'] = $_POST['email'];
	$password = $_POST['pw'];
	$cPassword = $_POST['rpw'];


	if(isset($_POST['sbtn'])){
		if ($password == $cPassword){
		header("Location:display.php");
	}
	else{
		echo '<script>
			alert("Password Mismatch");
			</script>';
			echo'<script>
				window.history.go(-1);
				</script>';
	}
}

?>