var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting ='The evening is upon us! ';
} else if (hourNow >12) {
greeting = 'Howdy, pardner, Nice time for a Pizza!';
} else if (hourNow > 0) {
  greeting = 'Good morning, my friend!';
} else {
  greeting = 'Welcome';
}
// document.getElementById('greeting');

var elgreeting = document.getElementById('greeting');

elgreeting.innerHTML = greeting;

// lol work you silly javascript
