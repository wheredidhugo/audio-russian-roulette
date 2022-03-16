// document.getElementById("test-audio").onclick = function() {
//     document.getElementById("time").innerHTML = "ok";
//     var audio = new Audio('assets/memes/bruh.mp3');
//     audio.play();
// }

var insideLoop = 0;

document.getElementById("jouer").onclick = function () {
  document.getElementById("prompt").style.display = "none";
  document.getElementById("game").style.display = "flex";
  const audio = new Audio();
  audio.autoplay = true;
  audio.src = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
   setInterval(() => {
    fetch("/latest")
      .then((res) => res.json())
      .then((data) => {
        if (insideLoop === 0) {
          const fetchInsideLoop = setInterval(() => {
            insideLoop = 1;
            var currentTime = new Date().getTime();
            if (data.time < currentTime || data.time === currentTime) {
              audio.src = data.file;
              clearInterval(fetchInsideLoop);
              insideLoop = 0;
            };
            console.log(data.time, currentTime, ((data.time-currentTime))/1000, data.file)
          }, 750);
        }
      })
    }, 1000);
};

// setInterval(() => {
//     if (document.getElementById("waiting").innerHTML.length <= 20) {
//         document.getElementById("waiting").innerHTML += ".";
//     } else {
//         document.getElementById("waiting").innerHTML = "Attendez l'audio";
//     }
// }, 1000);
