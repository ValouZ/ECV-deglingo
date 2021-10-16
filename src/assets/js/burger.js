let mobileNav = document.querySelector(".header__mobile-nav");
let burger = document.querySelector(".header__burger");

mobileNav.addEventListener("click", () => {
  burger.classList.toggle('open')
});
