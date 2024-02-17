// -----reference-: https://stackoverflow.com/questions/29718833/why-window-onscroll-event-does-not-work
window.onscroll = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
  }
};
// https://codepen.io/michalsnik/pen/WxNdvq -:----------Reference
// AOS
AOS.init({
  duration: 1000,
});

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;

  document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);
