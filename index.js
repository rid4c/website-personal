const tombol = document.querySelector(".tombol");
const menu = document.querySelector(".nav-li");

tombol.addEventListener("click", () => {
  menu.classList.toggle("aktif");
});

function openContactModal() {
  document.getElementById("contactModal").style.display = "block";
}

function closeContactModal() {
  document.getElementById("contactModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
