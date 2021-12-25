var express = require("express");
var app = express();

const base = __dirname;

/* ============================================ 
(7)  Mount the Logger here
=============================================== */

/* ============================================ 
(11)  Mount the body-parser here
=============================================== */

// (1) Meet the node console.
console.log("Hello World");

// (2) Start a Working Express Server
app.get("/", function (req, res) {
  res.send("Hello Express");
});

// (3) Serve an HTML file
app.get("/", function (req, res) {
  const htmlPath = base + "/views/index.html";
  res.sendFile(htmlPath);
});

// (4) Serve Static Assets
app.use("/public", express.static(base + "/public"));

// (5) Serve JSON on a Specific Route

// (6) Use the .env File

// (7) Implement a Root-Level Request Logger Middleware (a logger)

// (8) Chain Middleware to Create a Time Server

// (9)  Get Route Parameter Input from the Client

// (10) Get Query Parameter Input from the Client

// (11) Use body-parser to Parse POST Requests

// (12) Get Data from POST Requests

/*
===========================================================
                DO NOT EDIT BELOW THIS LINE
===========================================================
*/

module.exports = app;
