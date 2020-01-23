package main

import (
	"fmt"
)
	

func main(){
	tahun := 2018
	fmt.Println("Tahun :",tahun)
	fmt.Println("Tahun :", &tahun) //Mendapatkan Memory Address

	// inisiasi variabel baru dengan pointing  ke int milik variabel tahun
	var sekarang *int = &tahun

	fmt.Println("sekarang" , sekarang)
	// me reference isi dari memory address dengan *
	fmt.Println("sekarang",*sekarang)

	// merubah isi dari memory address
	*sekarang = 2019

	fmt.Println("Sekarang",sekarang)
	fmt.Println("Sekarang", *sekarang)
}