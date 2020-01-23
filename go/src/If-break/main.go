package main

import "fmt"

func main(){

	angka	:= 0
	for{
		angka++
		if angka >= 10{
			break
		}

		if angka%2 == 1 {
			fmt.Println(angka,"ganjil")
			continue
		}

		fmt.Println(angka)
	}
}