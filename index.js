document.getElementById("green-carousel-text-id").onmouseover = function() {mouseOver()};
document.getElementById("green-carousel-text-id").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("green-carousel-text-id").style.color = "rgb(8, 49, 8)";
}

function mouseOut() {
  document.getElementById("green-carousel-text-id").style.color = "#f0eeee";
}