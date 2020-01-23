package main

import(
	"fmt"
	"io/ioutil"
	"net/http"
	 _"time"
)

func main(){
	// Blank Identifier Docs
	// https://golang.org/doc/effective_go.html#blank

	res,_ := http.Get("https://arkademy.com/")
	page, _ := ioutil.ReadAll(res.Body)
	res.Body.Close()
	fmt.Printf("%s",page)

}