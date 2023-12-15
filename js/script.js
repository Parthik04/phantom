

// -----reference-: https://stackoverflow.com/questions/29718833/why-window-onscroll-event-does-not-work
window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}
// https://codepen.io/michalsnik/pen/WxNdvq -:----------Reference
// AOS
AOS.init({
    duration: 1000,
});