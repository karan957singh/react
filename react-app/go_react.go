package main

import (
    "log"
    "net/http"
)

func main() {
    //http.HandleFunc("/api/", apiHandler)
    //http.Handle("/", http.FileServer(http.Dir("./build")))
    log.Fatal(http.ListenAndServe(":8080", http.FileServer(http.Dir("./build"))))
}

func apiHandler(w http.ResponseWriter, r *http.Request) {}