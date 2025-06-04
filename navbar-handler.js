document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#menu-btn");
  const navbar = document.querySelector(".navbar");

  if (menu && navbar) {
    menu.onclick = () => {
      menu.classList.toggle("bi-x-lg");
      navbar.classList.toggle("active");
    };

    window.onscroll = () => {
      menu.classList.remove("bi-x-lg");
      navbar.classList.remove("active");
    };
  }
});
