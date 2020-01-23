<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname="profile";
$koneksi = new mysqli($host,$username,$password,$dbname);

if ($koneksi->connect_error) {
    die("Koneksi gagal");
}
?>