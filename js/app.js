var mins = 0;
var secs = 0;
var msecs = 0;
var interval;
var minHeading = document.getElementById("minutes");
var secHeading = document.getElementById("secs");
var msecsHeading = document.getElementById("msecs");

function start(){
  document.getElementById("start").hidden = true;
  document.getElementById("lap").disabled = false;
  var stop = document.getElementById("stop");
  stop.hidden = false;
  stop.className = "button";
  var lap = document.getElementById("lap");
  lap.hidden = false;
  lap.className = "button";
  var reset = document.getElementById("reset");
  reset.hidden = true;
  reset.className = "button";

  function timer(){
    msecs++;
    msecsHeading.innerHTML = msecs;
    if(msecs >= 100){
      msecs = 0;
      secs++;
      secHeading.innerHTML = secs +':';
    }
    if(secs >= 60){
      secs = 0;
      mins++;
      minHeading.innerHTML = mins +':';
    }
  }
  interval = setInterval(timer,10)
}

function stop(){
  document.getElementById("stop").hidden = true;
  document.getElementById("lap").hidden = true;
  var start = document.getElementById("start");
  start.hidden = false;
  start.className = "button";
  var reset = document.getElementById("reset");
  reset.hidden = false;
  reset.className = "button";
  clearInterval(interval);
}

function reset(){
  document.getElementById("stop").hidden = true;
  document.getElementById("reset").hidden = true;
  document.getElementById("lap").hidden = false;
  document.getElementById("lap").disabled = true;
  var start = document.getElementById("start");
  start.hidden = false;
  start.className = "button";

  minHeading.innerHTML = 0 +":";
  secHeading.innerHTML = 0 +":";
  msecsHeading.innerHTML = 0;
  document.getElementById("s.no").innerText = "";

}

count = 0;
function lap(){
  count++;
  document.getElementById("s.no").innerText += count +"\n";
} 