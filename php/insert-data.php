<?php 

include "koneksi.php";

$sql = "INSERT INTO user 
(
    id,
    nama,
    role,
    availabilty,
    age,
    location,
    years_experience,
    email
    
)  
VALUE 
(
    '1',
    'Vincent',
    'Mobile Developer',
    'Full Time',
    '20',
    'Jakarta',
    '2',
    'minimal6huruf@gmail.com'
)";



if($koneksi -> query($sql) == TRUE)
{
    echo "Insert data berhasil dibuat";
}

else{
    echo "Insert data gagal dibuat";
}


?>