const selectElement = (s) => document.querySelector(s);
const selectElements = (s) => document.querySelectorAll(s);

const menuIcon = selectElement(".menu-icon");
const navList = selectElement(".nav-list");
const navLinks = selectElements(".nav-link");

const toggleNav = () => {
  navList.classList.toggle("active");
  menuIcon.classList.toggle("toggle");

  navLinks.forEach((link, idx) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkAnimate 300ms ease forwards ${
        idx / 7 + 0.5
      }s`;
    }
  });
};

menuIcon.addEventListener("click", toggleNav);

navLinks.forEach((link) => {
  link.addEventListener("click", toggleNav);
});
