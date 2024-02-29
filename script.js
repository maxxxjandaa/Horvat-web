var visibleHeight = window.innerHeight;
var scrollHeight = document.documentElement.scrollHeight;

let interval = setInterval(frame, 1000);
function frame() {
  console.log("Aktuální viditelná výška okna:", visibleHeight);
  console.log(
    "Celková výška stránky (včetně neviditelné části):",
    scrollHeight
  );
}
