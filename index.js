function showHeader() {
  document.querySelector(".head-container").style.display = "block";
  document.querySelector(".head-container").classList.add("active");
  document.querySelector(".head-container").style.transition = "all 0.5s ease";
}

function hideHeader() {
  document.querySelector(".head-container").style.display = "none";
  document.querySelector(".head-container").classList.remove("active");
  document.querySelector(".head-container").style.transition = "all 0.5s ease";
}