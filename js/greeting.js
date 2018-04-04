var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting ='Good evening! Today is';
} else if (hourNow >12) {
greeting = 'Good afternoon! Today is';
} else if (hourNow > 0) {
  greeting = 'Good morning! Today is';
} else {
  greeting = 'Welcome';
}
// document.getElementById('greeting');

var elgreeting = document.getElementById('greeting');

elgreeting.innerHTML = greeting;
