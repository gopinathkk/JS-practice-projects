function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";
  var day = date.getDay();
var daydate = date.getUTCDate();
var mm=date.getMonth();
  var yr = date.getFullYear();
 const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const months= ["Jan", "Feb", 'Mar', "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"]

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  //   h = (h<10) ? "0" + h : h;
  //  m = (m<10) ? "0" + m : m;
  //  s = (s<10) ? "0" = s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("myClockDisplay").innerText = time;

  var dateS = days[day]+"  " + daydate +"  "+ months[mm] +"  "+ yr;
  document.getElementById("myDatedisplay").innerText= dateS;
 


}
showTime();
