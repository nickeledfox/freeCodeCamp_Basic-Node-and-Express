var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const base = __dirname;

// (7) Implement a Root-Level Request Logger Middleware
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);

  next();
});

// (11) Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }));

// (1) Meet the node console.
console.log("Hello World");

// (2) Start a Working Express Server
app.get("/", function (req, res) {
  res.send("Hello Express");
});

// (4) Serve Static Assets
// ex2 should be replaced with 3,4 from now
app.use("/public", express.static(base + "/public"));

// (3) Serve an HTML file
app.get("/", function (req, res) {
  const htmlPath = base + "/views/index.html";
  res.sendFile(htmlPath);
});

// (5) Serve JSON on a Specific Route
app.get("/json", function (req, res) {
  const msg = { message: "Hello json" };
  res.json(msg);
});

// (6) Use the .env File
// ex5 should be replaced with 6 from now
const mySecret = process.env["MESSAGE_STYLE"]; // =uppercase (in your .env or Replit/Secrets)

app.get("/json", function (req, res) {
  const msg = "Hello json";
  process.env.MESSAGE_STYLE === "uppercase"
    ? res.json({ message: msg.toUpperCase() })
    : res.json({ message: msg });
});

// (8) Chain Middleware to Create a Time Server
app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

// (9)  Get Route Parameter Input from the Client
app.get("/:word/echo", function (req, res) {
  res.json({ echo: req.params.word });
});

// (10) Get Query Parameter Input from the Client
app.get("/name", function (req, res) {
  let first = req.query.first;
  let last = req.query.last;

  let data = { name: `${first} ${last}` };
  res.send(data);
});

// (12) Get Data from POST Requests

/*
===========================================================
                DO NOT EDIT BELOW THIS LINE
===========================================================
*/

module.exports = app;
