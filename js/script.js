var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
  loop: true,
  grabCursor: true,
});
/*-- SHOW SCROLL UP --*/
const scrollUp = () => {
  const scrollUp = document.getElementById("arrow");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-arrow")
    : scrollUp.classList.remove("show-arrow");
};

window.addEventListener("scroll", scrollUp);

/*-- SCROLL REVEAL ANIMATION --*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true, // Animation repeat
});

sr.reveal(`.container-fluid`, { delay: 300 });
sr.reveal(`.top-cards, .product, .review, .footer_section`, { interval: 100 });
sr.reveal(`.menu .card, .album`, { origin: "bottom" });
sr.reveal(`.about .card, .col-md-7`, { origin: "right" });
sr.reveal(`.about, .col-md-5`, { origin: "left" });

/*-- SETTING UP MAP --*/
navigator.geolocation.getCurrentPosition((position) => {
  let { latitude, longitude } = position.coords;
  var map = L.map("map").setView([36.78982, 10.170722], 19);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  L.marker([36.78982, 10.170722]).addTo(map); // Markers
});
