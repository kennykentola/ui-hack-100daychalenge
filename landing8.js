// NAVBAR SCROLL EFFECT
const nav = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// MOBILE MENU
const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
  toggle.classList.toggle("open"); // animate hamburger to X
});

// SCROLL REVEAL
const animatedItems = document.querySelectorAll(".scroll-animate");

function revealOnScroll() {
  animatedItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// MULTI-LEVEL NAVBAR EFFECT
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  nav.classList.remove("level1", "level2", "level3");

  if (y > 20 && y < 150) nav.classList.add("level1");
  if (y >= 150 && y < 350) nav.classList.add("level2");
  if (y >= 350) nav.classList.add("level3");
});
