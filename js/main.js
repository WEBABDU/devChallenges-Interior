const hamburgerBtn = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close-btn");
const navList = document.querySelector(".nav__list");
const links = document.querySelectorAll(".nav__link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

hamburgerBtn.addEventListener("click", () => {
  navList.setAttribute("data-state", "opened");
  document.querySelector("body").style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  navList.setAttribute("data-state", "closing");

  navList.addEventListener(
    "animationend",
    () => {
      navList.setAttribute("data-state", "closed");
    },
    { once: true }
  );
});
