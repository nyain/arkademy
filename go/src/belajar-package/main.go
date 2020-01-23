package main

// Contoh Import 1
import selamat "belajar-package/greeting"

// contoh Import 2
import (
	"belajar-package/greeting"
	s "belajar-package/greeting"
)

// function main manggil function salam
func main() {
	salam()
}

// function salam berisi pemanggilan dari package  greeting
func salam() {

	greeting.Sore()

	greeting.Siang()

	s.Pagi()
	selamat.Malam()
}
