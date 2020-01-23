<?php

include "koneksi.php";

$asd = "CREATE TABLE user  (
    id int PRIMARY KEY,
    nama varchar(50),
    role varchar(50),
    availabilty varchar(50),
    age int,
    location varchar(50),
    years_experience varchar(50),
    email varchar(50)
    )";

if ($koneksi->query($asd) === TRUE){
    echo "Tabel berhasil dibuat";
} else{
    echo "Tabel gagal dibuat";
}
?>