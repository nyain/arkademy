package  main

import (
	"fmt"
)

// dokumentasi oficial tentang  constant
// https://blog.golang.org/constants

// penggunaan iota, start dari 0
// diulang dari 0 lagi di deklarasi constant yang selanjutnya

const(
	A = iota //disini mulai dari 0
	B
	C
	D
	E
	F
)

// type constant , yaitu string
const nama string = "Arkademy"

// panjang dan tinggi  untype, karena tidak didefinisikan tipe variabel nya
const(
	panjang = 2.9
	lebar int = 20
	tinggi =  0
)

func main(){
	// constant dapat di deklarasikan di dalam function
	const gravity int = 10

	fmt.Printf("panjang : %v - tipe nya : %T \n", panjang ,panjang)
	fmt.Println("Nama:" ,nama)
	fmt.Println("gravitasi: ", gravity)
	fmt.Println("iota:" , F	)
}