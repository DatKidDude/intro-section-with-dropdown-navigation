const openIcon = document.querySelector(".icon-open");
const closeIcon = document.querySelector(".icon-close");
const mobileNav = document.querySelector(".nav-links-container");
const modal = document.querySelector(".modal-overlay");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const arrows = document.querySelectorAll(".dropdown-arrow");

const handleDropdownMenu = (dropdownLink, idx) => {
  // toggle dropdown menu arrow on img element
  dropdownLink.currentTarget.childNodes[1].classList.toggle("flip-up");

  /* identify the dropdown container by button index and reset arrows
   */
  if (idx === 0) {
    dropdowns[0].classList.toggle("show");
    dropdowns[1].classList.remove("show");
    arrows[1].classList.remove("flip-up");
  } else {
    dropdowns[1].classList.toggle("show");
    dropdowns[0].classList.remove("show");
    arrows[0].classList.remove("flip-up");
  }
};

// add event listeners to each dropdown menu
dropdownBtns.forEach((dropdownBtn, idx) => {
  dropdownBtn.addEventListener("click", (e) => {
    handleDropdownMenu(e, idx);
  });
});

// toggle modal overlay and nav menu
const toggleModalAndNav = () => {
  mobileNav.classList.toggle("show");
  modal.classList.toggle("show");
};

const resetNav = () => {
  dropdowns.forEach((dropdown) => dropdown.classList.remove("show"));
  arrows.forEach((arrow) => arrow.classList.remove("flip-up"));
};

// open mobile menu
openIcon.addEventListener("click", () => {
  toggleModalAndNav();
  resetNav();
});

// close mobile menu
closeIcon.addEventListener("click", () => {
  toggleModalAndNav();
  resetNav();
});

// close modal by using the escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    toggleModalAndNav();
    resetNav();
  }
});

// close modal by clicking anywhere on the modal
modal.addEventListener("click", () => {
  toggleModalAndNav();
});
