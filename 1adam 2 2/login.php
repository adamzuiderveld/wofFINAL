<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "survey";

//get information from html form to use in database very important! Use later!
$user = filter_input(INPUT_POST, 'username');
$pass = filter_input(INPUT_POST, 'password');
$pw=sha1($pass);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT id, name, pw FROM login";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	if($user==$row["name"] && $pw == $row["pw"]){
        // echo "<br> id: ". $row["id"]. " - Name: ". $row["name"]. " " . $row["pw"] . "<br>";
    		echo "niceeeeeeee";
    		echo "<script> location.href='wof.html'; </script>";
        	exit;

    	}
    	else {echo "WRONG PW";}
    }
} else {
    echo "WRONG PASSWORD";
}

$conn->close();
?>
