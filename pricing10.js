// PRICE TOGGLE
const toggle = document.getElementById("price-toggle");
const prices = document.querySelectorAll(".price");

// Reveal animation
const cards = document.querySelectorAll(".card");

function revealCards() {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealCards);
revealCards();

// Toggle monthly/yearly prices
toggle.addEventListener("change", () => {
  prices.forEach(price => {
    let month = price.getAttribute("data-month");
    let year = price.getAttribute("data-year");

    price.style.opacity = 0;

    setTimeout(() => {
      price.textContent = toggle.checked ? `$${year}` : `$${month}`;
      price.style.opacity = 1;
    }, 200);
  });
});



// MOBILE MENU
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// STICKY NAV COLOR CHANGE
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
