const d = new Date();
let hour = d.getHours();

if (hour>=12 && hour<16) {
  document.getElementById('time').innerHTML="Good Afternoon";
}
if (hour>=4 && hour<12) {
  document.getElementById('time').innerHTML="Good Morning";
}
if (hour>=16 && hour<20) {
  document.getElementById('time').innerHTML="Good Evening";
}
if (hour>=20 && hour<0) {
  document.getElementById('time').innerHTML="Night Party Music";
}
if (hour>=0 && hour<4) {
  document.getElementById('time').innerHTML="Midnight Music";
}
