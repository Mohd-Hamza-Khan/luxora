// MOBILE MENU

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }else{
    navbar.classList.remove("scrolled");
  }

});

// CONTACT FORM

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();

});

// SIMPLE FADE-IN ANIMATION

const cards = document.querySelectorAll(
  ".service-card, .product-card"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";

    }

  });

}, { threshold: 0.2 });

cards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s ease";

  observer.observe(card);

});