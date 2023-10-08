// document.getElementById("size-12").onclick = function () {
//   document.body.style.fontSize = "12px";
// };

// document.getElementById("size-14").onclick = function () {
//   document.body.style.fontSize = "14px";
// };

// document.getElementById("size-16").onclick = function () {
//   document.body.style.fontSize = "16px";
// };

// Here, clickHandler returns another function which will be used when clicked.
// And here, why we need closure:
function clickHandler(size) {
  console.log("clicked");
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}
document.getElementById("size-12").onclick = clickHandler(12); // here clickHandler is calling
document.getElementById("size-14").onclick = clickHandler(14); // here clickHandler is calling
document.getElementById("size-16").onclick = clickHandler(16); // here clickHandler is calling
