const nav = document.querySelector(".navigation");
const closeBtn = document.querySelector(".closeBtn");
const openBtn = document.querySelector(".openBtn");

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
  nav.classList.add("close");
});
openBtn.addEventListener("click", () => {
  nav.classList.remove("close");
  nav.classList.add("open");
});
