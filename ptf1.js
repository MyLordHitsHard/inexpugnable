

// responsive navigation bar

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.querySelectorAll(".smallchange")[0].setAttribute("style", "");
    document.querySelectorAll(".smallchange")[1].setAttribute("style", "");
    
  } else {
    x.className = "topnav";
    document.querySelectorAll(".smallchange")[0].setAttribute("style", "float: right;");
    document.querySelectorAll(".smallchange")[1].setAttribute("style", "float: right;");
  }
}








