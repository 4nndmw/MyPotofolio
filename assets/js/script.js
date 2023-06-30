const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// slide

$(".skill-per").each(function () {
  var $this = $(this);
  var per = $this.attr("per");
  $this.css("width", per + "%");
  $({ animatedValue: 0 }).animate(
    { animatedValue: per },
    {
      duration: 1000,
      step: function () {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
      complete: function () {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
    }
  );
});

// preloader

// var loader = document.getElementById("preloader");

// window.addEventListener("load", function(){
//   loader.style.display = "none"; 
// })
// var loader = document.getElementById("preloader");

// window.addEventListener("load", function(){
//   setTimeout(function() {
//     loader.style.display = "none";
//   }, 2000); // 2000 milliseconds = 2 seconds
// });

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  setTimeout(function() {
    loader.style.display = "none";
    // Auto refresh the page
  }, 800); // 2000 milliseconds = 2 seconds
});
