<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "survey";

//get information from html form to use in database very important! Use later!
$name = filter_input(INPUT_POST, 'user');
$pass = filter_input(INPUT_POST, 'password');
$pw=sha1($pass);
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO login (name, pw)
VALUES ('$name', '$pw')";

if ($conn->query($sql) === TRUE) {
    echo "User created successfully";
	echo ' <br><a href="login.html">Login</a> </br>';
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
