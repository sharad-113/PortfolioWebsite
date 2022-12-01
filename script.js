const btn = document.querySelector(".nav-btn");

const showNav = () => {
  document.querySelector(".nav-links").classList.toggle("show-links");
};

btn.addEventListener("click", showNav);
