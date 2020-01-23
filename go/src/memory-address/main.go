package main

import(
	"fmt"
)

const detikDalamMenit int64 = 60

func main(){
	var menit int64

	fmt.Print("Masukan Menit")
	fmt.Scan(&menit)

	detik := menit * detikDalamMenit

	fmt.Println(menit, "menit adalah",detik ,"detik")
}	