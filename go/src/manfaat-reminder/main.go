package main

import (
	"fmt"
)

func main(){
	angkaPertama := 10
	angkaKedua := 5

	fmt.Println("A", angkaPertama%1)
	fmt.Println("B", angkaPertama%2)

	fmt.Println("C", angkaKedua/3) //5/3 = 1.66667

	fmt.Println("D", angkaPertama%3) // 5 = 3+2
	fmt.Println("E", angkaPertama%4) // 5 = 4+1

	fmt.Println("F", angkaPertama%3) // 10 = 3 + 3 + 3 + 1

	fmt.Println(angkaPertama, "ganjil ?", angkaPertama%2) //10 habis di bagi 2
	fmt.Println(angkaKedua, "ganjil ?", angkaKedua%2)     // 5 dibagi 2 sisa 1
}