let navigation = document.getElementById("navbar");
let nums = document.querySelectorAll(".counter .number");
let statsSection = document.querySelector(".counter");
let navBrand = document.querySelector(".navbar-brand");
let navToogle = document.querySelector(".navbar-toggler");
let navLinks = document.querySelectorAll('.nav-link');
let progressBar = document.querySelectorAll(" .progress .progress-bar");
let section = document.querySelector(".about")
let started = false;


window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navigation.style.backgroundColor = "white";
    navigation.style.boxShadow = "0px 30px 50px rgba(0, 0, 0, 0.05)";
    navigation.style.padding = "15px 0";
    navBrand.classList.add("dark");
    navToogle.classList.add("dark");
    navLinks.forEach(function (navLink) {
      navLink.classList.add("dark");
    });

    if (window.scrollY >= section.offsetTop - 150) {
      progressBar.forEach(function (bar) {
        bar.style.width = bar.dataset.width;
      });
    };


  } else {
    navigation.style.backgroundColor = "";
    navigation.style.boxShadow = "";
    navigation.style.padding = "40px 0";
    navBrand.classList.remove("dark");
    navToogle.classList.remove("dark");
    navLinks.forEach(function (navLink) {
      navLink.classList.remove("dark");
    });
  }


  if (window.scrollY >= statsSection.offsetTop - 500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }

};

function startCount(el) {
  let goal = el.dataset.goal;
  let currentCount = parseInt(el.textContent);
  let time = Math.ceil(goal / 450);
  let count = setInterval(() => {
    currentCount += time;
    if (currentCount >= goal) {
      el.textContent = goal;
      clearInterval(count);
    } else {
      el.textContent = currentCount;
    }
  }, 1);
}
