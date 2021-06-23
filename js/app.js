/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section"); //selecting all sections
const fragment = document.createDocumentFragment(); //creating fragment
const navBar = document.getElementById("navbar__list"); //selecting desktop navbar ul
const burgerMenu = document.getElementById("mob-menu"); //selecting mobile burger menu
const mobMenu = document.getElementById("mobile-list"); //selecting mobile nav

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Creating Nav Items Based on Screen Width
if (screen.width < 768) {
  navBar.style.display = "none";
  menuListCreation(mobMenu);
} else {
  burgerMenu.style.display = "none";
  menuListCreation(navBar);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build The Nav
function menuListCreation(menuType) {
  sections.forEach((elm) => {
    let menuItem = document.createElement("li"); //create li elements
    menuItem.classList.add("menu__link"); //adding menu__link class to each menu item
    menuItem.innerText = elm.getAttribute("data-nav"); //naming menu items
    elm.classList.remove("your-active-class"); //removing any active section styling
    menuItem.addEventListener("click", () => {
      elm.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      }); //scrolling to the corresponding section
    });
    fragment.appendChild(menuItem); //adding all menu item li elements to the fragment
  });
  menuType.appendChild(fragment); //adding the list items to the navbar ul
}


// Mobile Menu
mobMenu.classList.add("hide"); //hiding nav items under the burger menu
burgerMenu.addEventListener("click", () => {
  mobMenu.classList.toggle("hide");
}) //toggling mobile menu on click


// Active Section Styling
window.addEventListener("scroll", () => {
  sections.forEach((elm) => {
    let sectionTop = elm.getBoundingClientRect().top; //getting top coordinate of section
    sectionTop <= 100 && sectionTop >= -250 ? elm.classList.add("your-active-class") : elm.classList.remove("your-active-class"); //adding & removing active style according to scroll postision
  });
});


// Active Navbar Items
let desktopMenuItems = document.querySelectorAll("#navbar__list li"); //selecting desktop nav items li
let mobMenuItems = document.querySelectorAll(".burger-menu li"); //selecting mobile nav items li

// Applying Active Menu Item Style Based on Screen Width
if (screen.width < 768) {
  activeNavStyle(mobMenuItems);
} else {
  activeNavStyle(desktopMenuItems);
}

// Function Checks Which Section Has Active Style and Applies Active Style on Corresponding Nav Menu Item
function activeNavStyle(menu) {
  window.addEventListener("scroll", () => {
    menu.forEach((item) => {
      sections.forEach((sec) => {
        if (sec.classList.contains("your-active-class")) {
          if (sec.getAttribute("data-nav") === item.innerText) {
            item.classList.add("active__link");
          } else {
            item.classList.remove("active__link");
          }
        }
      })
    });
  })
}

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu
// Scroll to section on link click
// Set sections as active
