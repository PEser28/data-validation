<?php

	session_start();
	
	$_SESSION['FirstName'] = $_POST['FirstName'];
	$_SESSION['LastName'] = $_POST['LastName'];
	$_SESSION['userName'] = $_POST['userName'];
	$_SESSION['pass'] = $_POST['pass'];
	$_SESSION['re-pass'] = $_POST['re-pass'];
	$_SESSION['stNumber'] = $_POST['stNumber'];


	if(isset($_POST['SubmitCheck1'])){
		if(($_SESSION['pass'] == $_SESSION['re-pass'])){
			header("Location:display.php");
		}
		
		else {
			echo '<script>
				alert ("Password  Mismatch");
				</script>';
			echo '<script>
				window.history.go(-1);
				</script>';
		}
		
		
	}
	

?>