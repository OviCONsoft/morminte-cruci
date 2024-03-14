const headerEl = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    headerEl.classList.add("header-scrolled");
  } else if (window.scrollY <= 50) {
    headerEl.classList.remove("header-scrolled");
  }
});

var contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click", function () {
  var phoneNumber = document.querySelector(".phone-number");
  phoneNumber.classList.toggle("show");
});

window.addEventListener("scroll", function () {
  var catalog = document.getElementById("catalog");
  var position = catalog.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight - 100) {
    catalog.classList.add("show");
  } else {
    catalog.classList.remove("show");
  }
});

$(window).on("scroll", function () {
  var position = $("#catalog").offset().top;
  var windowHeight = $(window).height();
  if ($(window).scrollTop() > position - windowHeight) {
    $("#catalog").addClass("show");
  }
});

// Disable right-click on images
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// Disable dragging on images
document.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

// Ascunde extensia de fișier din URL la încărcarea paginii
function hideFileExtension() {
    var currentUrl = window.location.href;
    var updatedUrl = currentUrl.replace('.html', '');
    window.history.replaceState(null, null, updatedUrl);
}

// Ascultă evenimentul de încărcare a paginii și apelează funcția pentru a ascunde extensia de fișier
window.addEventListener('load', function() {
    hideFileExtension();
});
