var startTime = new Date("February 2, 2023 22:00:00").getTime();
var currentTime;

function updateTime() {
  currentTime = Date.now();
  var elapsedTime = currentTime - startTime;
  var totalSeconds = Math.floor(elapsedTime / 1000);
  var days = Math.floor(totalSeconds / 86400);
  var hours = Math.floor((totalSeconds - (days * 86400)) / 3600);
  var minutes = Math.floor((totalSeconds - (days * 86400) - (hours * 3600)) / 60);
  var seconds = totalSeconds - (days * 86400) - (hours * 3600) - (minutes * 60);
  var formattedTime = pad(days) + "-" + pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  var result = "|   " + formattedTime + "   | Peng Chen |   Yu Xi   |"
  document.getElementById("timer").innerHTML = result;
}

function pad(num, size) {
  var numString = num.toString();
  while (numString.length < size) {
    numString = "0" + numString;
  }
  return numString;
}

setInterval(updateTime, 1000);