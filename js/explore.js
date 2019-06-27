document.querySelector(".open").addEventListener("click", openMenu);

function openMenu() {
  document.querySelector(".dropdown").classList.toggle("active");
}