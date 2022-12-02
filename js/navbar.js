const navbarFunctionality = () => {
  const navToggleBtn = document.querySelector(".nav-toggle-btn");
  const navbar = document.querySelector(".navbar");
  const mainContentSection = document.querySelector(".main-content-section");
  navToggleBtn.addEventListener("click", (e) => {
    mainContentSection.classList.toggle("show");
    setTimeout(() => {
      navbar.classList.toggle("show");
      if (navbar.classList.contains("show")) {
        navbar.style.display = "block";
        navToggleBtn.children[0].classList.replace("fa-bars", "fa-xmark");
      } else {
        navbar.style.display = "none";

        navToggleBtn.children[0].classList.replace("fa-xmark", "fa-bars");
      }
    }, 100);
  });
};

export default navbarFunctionality;
