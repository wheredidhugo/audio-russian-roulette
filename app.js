const express = require('express');
const app = express();

const { files } = require("./files.json");

app.use(express.static('public'));

var currentDate;
var randomSecs = 0;
var filesRandom = 0;

var timeFunction = function(){
  currentDate = new Date().getTime();
  randomSecs = Math.floor(Math.random() * 16) + 5;
  filesRandom = Math.floor(Math.random() * files.length);
  timeout = setTimeout(timeFunction, randomSecs*1000);
}

var timeout = setTimeout(timeFunction, randomSecs*1000);

app.get('/latest', async (req, res) => {
  var audioTime = currentDate + (randomSecs * 1000)
  res.json({"time":audioTime, "file":files[filesRandom]})
  //res.json({"time":audioTime, "file":files[0]})
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
