// Parallax Effect
let headerShowcase = document.querySelector("#header-showcase");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  headerShowcase.style.marginTop = value * 1.2 + "px";
});

// Button To Top - Right
let btnToTop = document.querySelector(".btn-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Reveal Section
window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 40;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


// Cookie
console.clear();
"use strict";
(function() {
   var offcanvas = document.getElementById("offcanvas"),
       bs_offcanvas = new bootstrap.Offcanvas(offcanvas);
   
   bs_offcanvas.show();
})();

// Google Map
let map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 44.434831044470364, lng: 26.147003026598945 },
    zoom: 15,
  });
  new google.maps.Marker({
    position: { lat: 44.434831044470364, lng: 26.147003026598945 },
    map: map,
    // label: "RA",
    title: "RA Athletic",
    Animation: google.maps.Animation.BOUNCE
  })
}
initMap();

//Navigation
const nav = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < windows.scrollY) {
    console.log('we are going down');
  } else {
    console.log('we go up')
  }
})