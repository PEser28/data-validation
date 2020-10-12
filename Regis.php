<?php

$lastNameinput = $_POST['lastNameinput'];
$firstnameinput = $_POST['firstnameinput'];
$usernameinput = $_POST['usernameinput'];
$miInput = $_POST['miInput'];
$Password = $_POST['Password'];
$stNumber = $_POST['stNumber'];
$cPassword = $_POST['cPassword'];
$nEmail = $_POST['nEmail'];
$mNumber = $_POST['mNumber'];
$level = $_POST['level'];
$birth = $_POST['birth'];


if ($Password == $cPassword ) {
		insertRecord($lastNameinput,$firstnameinput,$usernameinput,$miInput,$Password,$stNumber,$cPassword,$nEmail,$mNumber,$level,$birth);
       
	}
	else {
		echo '<script>
  				alert("Password Mismatch!");
					</script>';

		echo '<script>
				window.history.go(-1);
					</script>';
		}






function insertRecord($lastNameinput,$firstnameinput,$usernameinput,$miInput,$Password,$stNumber,$cPassword,$nEmail,$mNumber,$level,$birth) {
 try {
 require 'OPENDATA.php';
     
  $sql = "INSERT INTO datas (lastNameinput,firstnameinput,usernameinput,miInput,Password,stNumber,cPassword,nEmail,mNumber,level,birth) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
     
     
  // use exec() because no results are returned 
     $conn->prepare($sql)->execute([$lastNameinput,$firstnameinput,$usernameinput,$miInput,$Password,$stNumber,$cPassword,$nEmail,$mNumber,$level,$birth]);


  echo '<script>
  				alert("Congratulations, you are now registered!");
					</script>';
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
}

?>