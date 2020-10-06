<?php
$email=$_POST['paolo'];
$password=$_POST['james'];

	if(isset($_POST['logup'])){
        if($email == "admin" and $password == "password") {
            header("Location:STUDENT BIONOTE/bionote.html");

        }

        else {
            echo '<script>
                alert ("Wrong Username/Password");
                </script>';
            echo '<script>
                window.history.go(-1);
                </script>';
		}
	
	}
?>