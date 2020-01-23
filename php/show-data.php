<?php

include "koneksi.php";

$sql = "SELECT * FROM user";
$result = $koneksi->query($sql);


foreach($result as $result){
    $id = $result["id"];
    $nama = $result["nama"];
    $role = $result["role"];
    $availabilty = $result["availabilty"];
    $age = $result["age"];
    $location = $result["location"];
    $experience = $result["years_experience"];
    $email = $result["email"];
}

?>