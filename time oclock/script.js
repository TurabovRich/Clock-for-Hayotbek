function checkTime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  minute = updateTime(minute);
  sec = updateTime(sec);
  document.getElementById('clock').innerText = hour + " : " + minute + " : " + sec;
  var t = setTimeout(function () {
    checkTime()
  }, 1000)
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k
  } else {
    return k
  }
}

checkTime()