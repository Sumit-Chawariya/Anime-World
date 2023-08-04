document.querySelector(".navbar-toggle").addEventListener("click", function () {
  let links = document.querySelectorAll(".navbar-links");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("active");
  }
  if (  document.getElementById("contact-child").style.display === "block") {
    document.getElementById("contact-child").style.display = "none"

  } else {
    document.getElementById("contact-child").style.display = "block"

  }
  

});