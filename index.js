const express = require("express");
const bodyParser = require("body-parser");
var app = express();

app.listen(3000);
app.use(express.static("assets"));
app.use(bodyParser.json());

const messages = [
  {
    message: "NODE"
  },
  {
    message: "IS"
  },
  {
    message: "COOL"
  },
  {
    message: "Wubba Dubba Lub Dub!"
  }
];

app.get("/messages", function(req, res, next) {
  res.status(200).json({ messages: messages });
});

// app.post("/messages", function(req, res, next) {
//   console.log(req.body);
// });

app.post("/messages", function(req, res, next) {
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
});
