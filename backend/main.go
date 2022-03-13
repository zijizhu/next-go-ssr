package main

import (
	"net/http"
)

var blog1 = `[
  {
    "type": "paragraph",
    "children": [
      {
        "text": "This is "
      },
      {
        "text": "rich",
        "bold": true
      },
      {
        "text": " text, "
      },
      {
        "text": "much",
        "italic": true,
        "underline": true,
        "bold": true
      },
      {
        "text": " better",
        "italic": true,
        "bold": true
      },
      {
        "text": " than plain text!",
        "bold": true
      }
    ]
  },
  {
    "type": "paragraph",
    "align": "right",
    "children": [
      {
        "text": "It is also "
      },
      {
        "text": "server-side rendered",
        "bold": true
      },
      {
        "text": ", which means the server fetches the data and generates HTML for the client!"
      }
    ]
  },
  {
    "type": "paragraph",
    "align": "center",
    "children": [
      {
        "text": "Try it out for yourself!"
      }
    ]
  }
]`

func main() {
	http.HandleFunc("/blog/1", BlogHandler)
	http.HandleFunc("/blog/count", CountHandler)
	http.ListenAndServe(":8000", nil)
}

func CountHandler(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"count": 1}`))
}

func BlogHandler(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(blog1))
}
