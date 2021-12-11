const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

const searchBtn = document.querySelector("#search-btn");
const input = document.querySelector(".nav-search")

searchBtn.addEventListener("click", function () {
    input.style.display = "block";
    input.style.transition = "0.3s ease";
});

document.getElementById("closeSearch").onclick = function (){
  input.style.display = "none";
}