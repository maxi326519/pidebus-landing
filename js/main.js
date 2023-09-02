const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
let menuOpen = false;

console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menu.classList.add("active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menu.classList.remove("active");
    menuOpen = false;
  }
  console.log(menuOpen);
});
