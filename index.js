const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

const { files } = require("./files.json");

app.use("/", express.static("public/"));

// var currentDate;
var randomSecs = 0;
var filesRandom = 0;

var timeFunction = function () {
  //   currentDate = new Date().getTime();
  randomSecs = Math.floor(Math.random() * 16) + 5;
  filesRandom = Math.floor(Math.random() * files.length);
  timeout = setTimeout(timeFunction, randomSecs * 1000);
  //   var audioTime = currentDate + randomSecs * 1000;
  io.emit("audio", { file: files[filesRandom] });
};

var timeout = setTimeout(timeFunction, randomSecs * 1000);

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
