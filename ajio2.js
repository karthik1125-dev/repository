console.log("AJIO Clone loaded");

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll("header nav ul li");

  navItems.forEach((item) => {
    const submenu = item.querySelector(".submenu");

    item.addEventListener("mouseenter", function () {
      item.style.backgroundColor = "#f2f2f2";
      item.style.cursor = "pointer";
      if (submenu) {
        submenu.style.display = "block";
      }
    });

    item.addEventListener("mouseleave", function () {
      item.style.backgroundColor = "";
      if (submenu) {
        submenu.style.display = "none";
      }
    });
  });
});
// Slideshow for banner images
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".banner-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});